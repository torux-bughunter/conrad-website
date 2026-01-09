export interface Field {
  id: string;
  name: string;
  area: number; // hectares
  cropType: string;
  location: {
    lat: number;
    lng: number;
  };
  status: 'active' | 'monitoring' | 'critical';
  moisture: number; // percentage
  temperature: number; // celsius
  lastUpdate: Date;
}

export interface Deployment {
  id: string;
  fieldId: string;
  batchId: string;
  quantity: number; // kg
  status: 'scheduled' | 'in-progress' | 'completed';
  scheduledAt: Date;
  completedAt?: Date;
}

export interface AIPrediction {
  optimalWindow: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  expectedMoistureIncrease: number;
  recommendation: string;
  confidence: number;
}

export interface Analytics {
  totalWaterSaved: number;
  fieldsMonitored: number;
}




