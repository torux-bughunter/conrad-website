import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { DollarSign, TrendingUp, Target, Award, BarChart3, Calendar } from 'lucide-react-native';
import { LineChart } from '../components/LineChart';
import { ComparisonChart } from '../components/ComparisonChart';
import { Colors } from '../constants/Colors';

export default function BusinessMetricsScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState<'quarter' | 'year' | 'all'>('year');

  const businessMetrics = {
    totalRevenue: 125000,
    totalCost: 87500,
    netProfit: 37500,
    roi: 150,
    paybackPeriod: 8,
    customerLTV: 45000,
  };

  const revenueData = [45000, 52000, 48000, 65000, 58000, 72000, 68000, 75000, 70000, 78000, 82000, 87000];
  const revenueLabels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4'];

  const costComparison = {
    labels: ['Traditional', 'Gelionyx'],
    traditional: [100, 95, 92, 90, 88],
    gelionyx: [100, 85, 75, 65, 55],
  };

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
              <Text style={styles.greeting}>Business Metrics</Text>
              <Text style={styles.title}>Financial Performance</Text>
            </View>
            <View style={styles.iconContainer}>
              <DollarSign size={28} color={Colors.black} />
            </View>
          </View>
        </LinearGradient>

        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {(['quarter', 'year', 'all'] as const).map((period) => (
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

        {/* Key Financial Metrics */}
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <DollarSign size={32} color={Colors.success} />
            <Text style={styles.metricValue}>${(businessMetrics.totalRevenue / 1000).toFixed(0)}K</Text>
            <Text style={styles.metricLabel}>Total Revenue</Text>
          </View>
          <View style={styles.metricCard}>
            <TrendingUp size={32} color={Colors.primary} />
            <Text style={styles.metricValue}>${(businessMetrics.netProfit / 1000).toFixed(0)}K</Text>
            <Text style={styles.metricLabel}>Net Profit</Text>
          </View>
          <View style={styles.metricCard}>
            <Target size={32} color={Colors.secondary} />
            <Text style={styles.metricValue}>{businessMetrics.roi}%</Text>
            <Text style={styles.metricLabel}>ROI</Text>
          </View>
          <View style={styles.metricCard}>
            <Award size={32} color={Colors.warning} />
            <Text style={styles.metricValue}>{businessMetrics.paybackPeriod}</Text>
            <Text style={styles.metricLabel}>Payback (months)</Text>
          </View>
        </View>

        {/* Revenue Trend */}
        <View style={styles.section}>
          <LineChart
            data={revenueData}
            labels={revenueLabels}
            title="Revenue Growth Trend"
            color={Colors.success}
            height={240}
            unit="$"
            yAxisSuffix="$"
          />
        </View>

        {/* Cost Comparison */}
        <View style={styles.section}>
          <ComparisonChart
            data1={costComparison.traditional}
            data2={costComparison.gelionyx}
            labels={costComparison.labels}
            title="Cost Comparison: Traditional vs Gelionyx"
            label1="Traditional"
            label2="Gelionyx"
            color1={Colors.danger}
            color2={Colors.primary}
            unit="$"
            yAxisSuffix="$"
          />
        </View>

        {/* Financial Summary */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <BarChart3 size={24} color={Colors.primary} />
            <Text style={styles.cardTitle}>Financial Summary</Text>
          </View>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Gross Margin</Text>
              <Text style={styles.summaryValue}>30%</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Operating Margin</Text>
              <Text style={styles.summaryValue}>25%</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Customer LTV</Text>
              <Text style={styles.summaryValue}>${(businessMetrics.customerLTV / 1000).toFixed(0)}K</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>CAC Payback</Text>
              <Text style={styles.summaryValue}>6 months</Text>
            </View>
          </View>
        </View>

        {/* Growth Projections */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Calendar size={24} color={Colors.secondary} />
            <Text style={styles.cardTitle}>Growth Projections</Text>
          </View>
          <View style={styles.projectionList}>
            <View style={styles.projectionItem}>
              <Text style={styles.projectionPeriod}>Year 1</Text>
              <Text style={styles.projectionValue}>$125K</Text>
              <Text style={styles.projectionGrowth}>+25%</Text>
            </View>
            <View style={styles.projectionItem}>
              <Text style={styles.projectionPeriod}>Year 2</Text>
              <Text style={styles.projectionValue}>$200K</Text>
              <Text style={styles.projectionGrowth}>+60%</Text>
            </View>
            <View style={styles.projectionItem}>
              <Text style={styles.projectionPeriod}>Year 3</Text>
              <Text style={styles.projectionValue}>$350K</Text>
              <Text style={styles.projectionGrowth}>+75%</Text>
            </View>
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
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.text,
    marginTop: 12,
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    textAlign: 'center',
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
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  summaryItem: {
    width: '48%',
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  summaryLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.text,
  },
  projectionList: {
    gap: 12,
  },
  projectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: Colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  projectionPeriod: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
  },
  projectionValue: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.primary,
  },
  projectionGrowth: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.success,
  },
});




