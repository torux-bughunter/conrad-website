import Groq from 'groq-sdk';

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.EXPO_PUBLIC_GROQ_API_KEY || '', // You'll need to set this in your .env
});

export interface PredictionRequest {
  fieldId: string;
  currentMoisture: number;
  temperature: number;
  cropType: string;
  area: number;
  historicalData?: {
    moisture: number[];
    dates: string[];
  };
}

export interface PredictionResponse {
  optimalWindow: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  expectedMoistureIncrease: number;
  recommendation: string;
  confidence: number;
  reasoning: string;
}

export async function getAIPrediction(
  request: PredictionRequest
): Promise<PredictionResponse> {
  try {
    const prompt = `You are an AI agricultural advisor for Gelionyx, a system that uses biodegradable probiotic hydrogels to optimize water usage in arid regions.

Field Information:
- Field ID: ${request.fieldId}
- Current Soil Moisture: ${request.currentMoisture}%
- Temperature: ${request.temperature}°C
- Crop Type: ${request.cropType}
- Area: ${request.area} hectares

${request.historicalData ? `Historical Moisture Data: ${request.historicalData.moisture.join(', ')}%` : ''}

Analyze this data and provide:
1. Optimal deployment window (e.g., "Next 24-48 hours", "Within 72 hours", "Immediate action required")
2. Risk level (low, medium, high, or critical)
3. Expected moisture increase after hydrogel deployment (percentage)
4. A clear, actionable recommendation for the farmer
5. Confidence level (0-100)
6. Brief reasoning for your assessment

Respond in JSON format with these exact keys: optimalWindow, riskLevel, expectedMoistureIncrease, recommendation, confidence, reasoning.

Consider:
- Moisture below 25% is critical for most crops
- Optimal deployment timing is crucial for maximum effectiveness
- Weather patterns and crop growth stage matter
- The hydrogel provides 40% water retention improvement`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert agricultural AI advisor specializing in drought management and water optimization. Always respond with valid JSON.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 500,
      response_format: { type: 'json_object' },
    });

    const response = completion.choices[0]?.message?.content || '{}';
    const parsed = JSON.parse(response);

    return {
      optimalWindow: parsed.optimalWindow || 'Next 24-48 hours',
      riskLevel: parsed.riskLevel || 'medium',
      expectedMoistureIncrease: parsed.expectedMoistureIncrease || 35,
      recommendation: parsed.recommendation || 'Monitor field conditions closely',
      confidence: parsed.confidence || 75,
      reasoning: parsed.reasoning || 'Based on current field conditions',
    };
  } catch (error) {
    console.error('Groq API Error:', error);
    // Fallback response
    return {
      optimalWindow: 'Next 24-48 hours',
      riskLevel: request.currentMoisture < 15 ? 'critical' : request.currentMoisture < 25 ? 'high' : 'medium',
      expectedMoistureIncrease: 35,
      recommendation: request.currentMoisture < 15 
        ? 'Immediate deployment recommended to prevent crop stress'
        : 'Schedule deployment within optimal window',
      confidence: 70,
      reasoning: 'Analysis based on current field conditions',
    };
  }
}

export async function getAIRecommendation(fieldId: string, question: string): Promise<string> {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are an expert agricultural advisor for Gelionyx. Provide clear, actionable advice for farmers managing drought conditions.',
        },
        {
          role: 'user',
          content: `Field: ${fieldId}\n\nQuestion: ${question}\n\nProvide a concise, helpful answer.`,
        },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 300,
    });

    return completion.choices[0]?.message?.content || 'Unable to generate recommendation at this time.';
  } catch (error) {
    console.error('Groq API Error:', error);
    return 'Please check your connection and try again.';
  }
}

