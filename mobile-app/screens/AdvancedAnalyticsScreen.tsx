import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { TrendingUp, TrendingDown, Target, Award, BarChart3, Calendar } from 'lucide-react-native';
import { LineChart } from '../components/LineChart';
import { ComparisonChart } from '../components/ComparisonChart';
import { PieChart } from '../components/PieChart';
import { Colors } from '../constants/Colors';

export default function AdvancedAnalyticsScreen({ navigation }: any) {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');

  // Advanced analytics data
  const fieldComparison = {
    labels: ['Zone A', 'Zone B', 'Zone C', 'Zone D'],
    moisture: [12, 18, 22, 25],
  };

  const historicalComparison = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    current: [45, 52, 48, 65, 58, 72],
    previous: [40, 45, 42, 55, 50, 60],
  };

  const resourceDistribution = [
    { name: 'Water Saved', value: 40, color: Colors.primary, legendFontColor: Colors.text, legendFontSize: 12 },
    { name: 'CO2 Reduced', value: 30, color: Colors.secondary, legendFontColor: Colors.text, legendFontSize: 12 },
    { name: 'Fields Improved', value: 20, color: Colors.success, legendFontColor: Colors.text, legendFontSize: 12 },
    { name: 'Sustainability', value: 10, color: Colors.warning, legendFontColor: Colors.text, legendFontSize: 12 },
  ];

  const performanceMetrics = [
    { label: 'Avg. Moisture Retention', value: '87%', trend: 'up', change: '+12%' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greeting}>Advanced Analytics</Text>
              <Text style={styles.title}>Deep Insights</Text>
            </View>
            <View style={styles.iconContainer}>
              <BarChart3 size={28} color={Colors.black} />
            </View>
          </View>
        </LinearGradient>

        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {(['week', 'month', 'year'] as const).map((period) => (
            <TouchableOpacity
              key={period}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.periodButtonActive,
              ]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text
                style={[
                  styles.periodText,
                  selectedPeriod === period && styles.periodTextActive,
                ]}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Performance Metrics Grid */}
        <View style={styles.metricsGrid}>
          {performanceMetrics.map((metric, index) => (
            <View key={index} style={styles.metricCard}>
              <Text style={styles.metricLabel}>{metric.label}</Text>
              <View style={styles.metricValueRow}>
                <Text style={styles.metricValue}>{metric.value}</Text>
                <View style={styles.trendContainer}>
                  {metric.trend === 'up' ? (
                    <TrendingUp size={16} color={Colors.success} />
                  ) : (
                    <TrendingDown size={16} color={Colors.danger} />
                  )}
                  <Text style={[styles.trendText, { color: metric.trend === 'up' ? Colors.success : Colors.danger }]}>
                    {metric.change}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Field Comparison */}
        <View style={styles.section}>
          <ComparisonChart
            data1={fieldComparison.moisture}
            data2={[15, 20, 24, 28]}
            labels={fieldComparison.labels}
            title="Field Moisture Comparison"
            label1="Current Moisture %"
            label2="Target Moisture %"
            unit="%"
            yAxisSuffix="%"
          />
        </View>

        {/* Historical Comparison */}
        <View style={styles.section}>
          <ComparisonChart
            data1={historicalComparison.current}
            data2={historicalComparison.previous}
            labels={historicalComparison.labels}
            title="Year-over-Year Comparison"
            label1="Current Year"
            label2="Previous Year"
            unit="%"
            yAxisSuffix="%"
          />
        </View>

        {/* Resource Distribution */}
        <View style={styles.section}>
          <PieChart
            data={resourceDistribution}
            title="Resource Impact Distribution"
            height={280}
          />
        </View>

        {/* Predictive Insights */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Award size={24} color={Colors.secondary} />
            <Text style={styles.cardTitle}>Predictive Insights</Text>
          </View>
          <View style={styles.insightBox}>
            <Text style={styles.insightTitle}>Next 30 Days Forecast</Text>
            <Text style={styles.insightText}>
              Based on current trends and weather patterns, expect a 15% increase in
              optimal monitoring
              windows identified for 3 fields.
            </Text>
          </View>
          <View style={styles.insightBox}>
            <Text style={styles.insightTitle}>Risk Assessment</Text>
            <Text style={styles.insightText}>
              Low risk profile across all monitored fields. AI confidence level: 94%.
              Recommended actions: Continue current monitoring schedule.
            </Text>
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
    paddingBottom: 100,
  },
  header: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 24,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.lg,
    overflow: 'hidden',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  greeting: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.black,
    opacity: 0.7,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.black,
    letterSpacing: -0.5,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  periodSelector: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  periodButton: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.neutral[300],
    alignItems: 'center',
  },
  periodButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.black,
  },
  periodText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  periodTextActive: {
    color: Colors.black,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  metricCard: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  metricLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  metricValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.text,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendText: {
    fontSize: 12,
    fontWeight: '800',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  insightBox: {
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  insightTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  insightText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    lineHeight: 22,
  },
});




