import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Droplets, AlertCircle, BrainCircuit, ArrowLeft, Calendar, Thermometer } from 'lucide-react-native';
import { LineChart } from '../components/LineChart';
import { BarChart } from '../components/BarChart';
import { Colors } from '../constants/Colors';
import { getAIPrediction, getAIRecommendation } from '../services/groqService';
import { Field, AIPrediction } from '../types';

export default function FieldDetailsScreen({ route, navigation }: any) {
  const { field: fieldParam, prediction: initialPrediction }: { field: any; prediction?: AIPrediction } =
    route.params || {};
  // Convert string back to Date if needed
  const field: Field = fieldParam ? {
    ...fieldParam,
    lastUpdate: typeof fieldParam.lastUpdate === 'string' ? new Date(fieldParam.lastUpdate) : fieldParam.lastUpdate,
  } : {
    id: '',
    name: 'Unknown Field',
    area: 0,
    cropType: 'Unknown',
    location: { lat: 0, lng: 0 },
    status: 'monitoring',
    moisture: 0,
    temperature: 0,
    lastUpdate: new Date(),
  };
  
  const [prediction, setPrediction] = useState<AIPrediction | null>(initialPrediction || null);
  const [loading, setLoading] = useState(!initialPrediction);
  const [recommendation, setRecommendation] = useState<string>('');

  // Mock historical data for charts - defined after state
  const historicalMoisture = [18, 20, 15, 12, 14, 16, field?.moisture || 0];
  const historicalLabels = ['7d', '6d', '5d', '4d', '3d', '2d', 'Today'];
  const weeklyTemperature = [26, 28, 27, 29, 28, 30, field?.temperature || 0];

  useEffect(() => {
    if (!initialPrediction && field.id) {
      fetchPrediction();
    }
  }, []);

  const fetchPrediction = async () => {
    if (!field.id) return;
    setLoading(true);
    try {
      const result = await getAIPrediction({
        fieldId: field.id,
        currentMoisture: field.moisture || 0,
        temperature: field.temperature || 0,
        cropType: field.cropType || 'Unknown',
        area: field.area || 0,
      });
      setPrediction(result);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'critical':
        return Colors.danger;
      case 'high':
        return Colors.warning;
      case 'medium':
        return Colors.warning;
      default:
        return Colors.success;
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ArrowLeft size={24} color={Colors.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Field Details</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Field Info Card */}
        <View style={styles.card}>
          <Text style={styles.fieldName}>{field.name}</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Crop Type:</Text>
            <Text style={styles.value}>{field.cropType}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Area:</Text>
            <Text style={styles.value}>{field.area} hectares</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Status:</Text>
            <Text style={[styles.value, { color: getRiskColor(field.status) }]}>
              {field.status.toUpperCase()}
            </Text>
          </View>
        </View>

        {/* Metrics Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Current Metrics</Text>
          <View style={styles.metricsGrid}>
            <View style={styles.metricBox}>
              <Droplets size={32} color={Colors.secondary} />
              <Text style={styles.metricValue}>{field.moisture}%</Text>
              <Text style={styles.metricLabel}>Soil Moisture</Text>
            </View>
            <View style={styles.metricBox}>
              <Thermometer size={32} color={Colors.primary} />
              <Text style={styles.metricValue}>{field.temperature}°C</Text>
              <Text style={styles.metricLabel}>Temperature</Text>
            </View>
          </View>
        </View>

        {/* Historical Moisture Trend */}
        <View style={styles.section}>
          <LineChart
            data={historicalMoisture}
            labels={historicalLabels}
            title="Moisture Trend (Last 7 Days)"
            color={Colors.primary}
            height={200}
            unit="%"
            yAxisSuffix="%"
          />
        </View>

        {/* Temperature Trend */}
        <View style={styles.section}>
          <BarChart
            data={weeklyTemperature}
            labels={historicalLabels}
            title="Temperature Trend (Last 7 Days)"
            color={Colors.secondary}
            height={200}
            unit="°C"
            yAxisSuffix="°C"
          />
        </View>

        {/* AI Prediction Card */}
        {loading ? (
          <View style={styles.card}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={styles.loadingText}>Analyzing field conditions...</Text>
          </View>
        ) : prediction ? (
          <View style={styles.card}>
            <View style={styles.aiHeader}>
              <BrainCircuit size={24} color={Colors.primary} />
              <Text style={styles.cardTitle}>AI Prediction</Text>
            </View>
            <View style={[styles.riskBadge, { backgroundColor: getRiskColor(prediction.riskLevel) }]}>
              <Text style={styles.riskText}>{prediction.riskLevel.toUpperCase()} RISK</Text>
            </View>
            <View style={styles.predictionContent}>
              <View style={styles.predictionRow}>
                <Calendar size={20} color={Colors.textSecondary} />
                <View style={styles.predictionText}>
                  <Text style={styles.predictionLabel}>Optimal Window</Text>
                  <Text style={styles.predictionValue}>{prediction.optimalWindow}</Text>
                </View>
              </View>
              <View style={styles.predictionRow}>
                <Droplets size={20} color={Colors.secondary} />
                <View style={styles.predictionText}>
                  <Text style={styles.predictionLabel}>Expected Increase</Text>
                  <Text style={styles.predictionValue}>+{prediction.expectedMoistureIncrease}%</Text>
                </View>
              </View>
              <View style={styles.recommendationBox}>
                <Text style={styles.recommendationLabel}>Recommendation</Text>
                <Text style={styles.recommendationText}>{prediction.recommendation}</Text>
              </View>
              <View style={styles.confidenceBox}>
                <Text style={styles.confidenceText}>
                  Confidence: {prediction.confidence}%
                </Text>
              </View>
            </View>
          </View>
        ) : null}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding for tab bar
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 16,
    ...Colors.shadow.md,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  fieldName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  metricBox: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.background,
    borderRadius: 12,
  },
  metricValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    marginTop: 8,
  },
  metricLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  riskBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  riskText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  predictionContent: {
    gap: 16,
  },
  predictionRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  predictionText: {
    flex: 1,
  },
  predictionLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  predictionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  recommendationBox: {
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  recommendationLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
    fontWeight: '600',
  },
  recommendationText: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
  confidenceBox: {
    alignItems: 'center',
    paddingTop: 8,
  },
  confidenceText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },
  loadingText: {
    marginTop: 12,
    textAlign: 'center',
    color: Colors.textSecondary,
  },
  actionButton: {
    marginHorizontal: 20,
    marginBottom: 32,
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

