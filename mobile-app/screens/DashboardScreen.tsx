import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Droplets, AlertCircle, BrainCircuit, BarChart3, TrendingUp, Zap, Package, Bell, Cloud, Leaf, DollarSign, HelpCircle } from 'lucide-react-native';
import { FieldCard } from '../components/FieldCard';
import { AnimatedStatCard } from '../components/AnimatedStatCard';
import { ProgressRing } from '../components/ProgressRing';
import { LineChart } from '../components/LineChart';
import { RealTimeIndicator } from '../components/RealTimeIndicator';
import GelionyxLogo from '../components/GelionyxLogo';
import { Colors } from '../constants/Colors';
import { mockFields, mockAnalytics } from '../services/mockData';
import { getAIPrediction } from '../services/groqService';
import { Field, AIPrediction } from '../types';

const { width } = Dimensions.get('window');

export default function DashboardScreen({ navigation }: any) {
  const [fields, setFields] = useState<Field[]>(mockFields);
  const [refreshing, setRefreshing] = useState(false);
  const [predictions, setPredictions] = useState<Record<string, AIPrediction>>({});
  const [loading, setLoading] = useState(false);

  const fetchPredictions = async () => {
    setLoading(true);
    try {
      const newPredictions: Record<string, AIPrediction> = {};
      for (const field of fields) {
        const prediction = await getAIPrediction({
          fieldId: field.id,
          currentMoisture: field.moisture,
          temperature: field.temperature,
          cropType: field.cropType,
          area: field.area,
        });
        newPredictions[field.id] = prediction;
      }
      setPredictions(newPredictions);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPredictions();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate data refresh
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetchPredictions();
    setRefreshing(false);
  };

  const handleFieldPress = (field: Field) => {
    // Convert Date to string to avoid serialization warning
    const serializedField = {
      ...field,
      lastUpdate: field.lastUpdate.toISOString(),
    };
    navigation.navigate('FieldDetails', { field: serializedField, prediction: predictions[field.id] });
  };

  const criticalField = fields.find((f) => f.status === 'critical');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Hero Header with Gradient */}
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroHeader}
        >
          <View style={styles.headerContent}>
            <View style={styles.headerTextContainer}>
              <View style={styles.headerTop}>
                <Text style={styles.greeting}>Welcome back</Text>
                <RealTimeIndicator isActive={true} />
              </View>
              <GelionyxLogo size="lg" showTagline={false} />
              <Text style={styles.subtitle}>AI-Powered Agriculture</Text>
            </View>
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Bell size={20} color={Colors.black} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => navigation.navigate('Analytics')}
            >
              <BarChart3 size={20} color={Colors.black} />
            </TouchableOpacity>
          </View>
          </View>
        </LinearGradient>

        {/* Critical Alert - Redesigned */}
        {criticalField && (
          <TouchableOpacity
            style={styles.alertCard}
            onPress={() => handleFieldPress(criticalField)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[Colors.danger, '#FF6B6B']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.alertGradient}
            >
              <View style={styles.alertContent}>
                <View style={styles.alertHeader}>
                  <View style={styles.alertIconContainer}>
                    <AlertCircle size={28} color={Colors.white} />
                  </View>
                  <View style={styles.alertTextContainer}>
                    <Text style={styles.alertTitle}>URGENT ACTION REQUIRED</Text>
                    <Text style={styles.alertFieldName}>{criticalField.name}</Text>
                  </View>
                </View>
                <View style={styles.alertMetrics}>
                  <View style={styles.alertMetric}>
                    <Text style={styles.alertMetricValue}>{criticalField.moisture}%</Text>
                    <Text style={styles.alertMetricLabel}>Moisture</Text>
                  </View>
                  <View style={styles.alertDivider} />
                  <View style={styles.alertMetric}>
                    <Text style={styles.alertMetricValue}>{criticalField.temperature}°C</Text>
                    <Text style={styles.alertMetricLabel}>Temperature</Text>
                  </View>
                </View>
                {predictions[criticalField.id] && (
                  <View style={styles.alertRecommendationBox}>
                    <Text style={styles.alertRecommendation}>
                      {predictions[criticalField.id].recommendation}
                    </Text>
                  </View>
                )}
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}

        {/* Overall Moisture Trend */}
        <View style={styles.section}>
          <LineChart
            data={[20, 35, 50, 80, 25, 15, 30, 45, 60, 55, 40, 50]}
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
            title="Overall Moisture Trend"
            color={Colors.primary}
            height={200}
            unit="%"
            yAxisSuffix="%"
          />
        </View>

        {/* Fields Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Fields</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Fields')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {fields.map((field) => (
            <FieldCard key={field.id} field={field} onPress={() => handleFieldPress(field)} />
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={styles.actionButtonSecondary}
              onPress={() => navigation.navigate('Analytics')}
              activeOpacity={0.8}
            >
              <BarChart3 size={20} color={Colors.primary} />
              <Text style={styles.actionButtonTextSecondary}>View Analytics</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  heroHeader: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    overflow: 'hidden',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  greeting: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.black,
    opacity: 0.6,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: Colors.black,
    marginBottom: 2,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.black,
    opacity: 0.7,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 10,
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
  },
  alertCard: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: Colors.black,
    overflow: 'hidden',
  },
  alertGradient: {
    padding: 20,
  },
  alertContent: {
    gap: 16,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  alertIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: Colors.white,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  alertFieldName: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.white,
  },
  alertMetrics: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    gap: 16,
  },
  alertMetric: {
    flex: 1,
    alignItems: 'center',
  },
  alertMetricValue: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.black,
    marginBottom: 4,
  },
  alertMetricLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
  },
  alertDivider: {
    width: 1,
    backgroundColor: Colors.neutral[300],
  },
  alertRecommendationBox: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
  },
  alertRecommendation: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.black,
    lineHeight: 18,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  seeAll: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '700',
  },
  performanceSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  performanceGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  performanceCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
    minHeight: 140,
  },
  performanceStat: {
    alignItems: 'center',
    gap: 6,
  },
  performanceValue: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.text,
  },
  performanceLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  actionsGrid: {
    gap: 12,
  },
  actionButtonPrimary: {
    borderRadius: 18,
    borderWidth: 2,
    borderColor: Colors.black,
    overflow: 'hidden',
  },
  actionButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 16,
  },
  actionButtonTextPrimary: {
    fontSize: 15,
    fontWeight: '900',
    color: Colors.black,
    letterSpacing: 0.3,
  },
  actionButtonSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 16,
    borderRadius: 18,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  actionButtonTextSecondary: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
  },
});

