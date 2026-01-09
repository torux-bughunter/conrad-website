import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { BarChart3, Droplets, TrendingUp, Award, Calendar, Target } from 'lucide-react-native';
import { AnimatedStatCard } from '../components/AnimatedStatCard';
import { LineChart } from '../components/LineChart';
import { BarChart } from '../components/BarChart';
import { PieChart } from '../components/PieChart';
import { Colors } from '../constants/Colors';
import { mockAnalytics } from '../services/mockData';

export default function AnalyticsScreen({ navigation }: any) {
  // Mock data for charts
  const moistureData = [15, 18, 22, 25, 28, 30, 32, 35, 33, 30, 28, 25];
  const moistureLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const weeklyMoisture = [20, 35, 50, 80, 25, 15, 30];
  const weeklyLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const fieldDistribution = [
    {
      name: 'Active',
      value: 60,
      color: Colors.primary,
      legendFontColor: Colors.text,
      legendFontSize: 12,
    },
    {
      name: 'Monitoring',
      value: 30,
      color: Colors.secondary,
      legendFontColor: Colors.text,
      legendFontSize: 12,
    },
    {
      name: 'Critical',
      value: 10,
      color: Colors.danger,
      legendFontColor: Colors.text,
      legendFontSize: 12,
    },
  ];


  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Header */}
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroHeader}
        >
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greeting}>Analytics Dashboard</Text>
              <Text style={styles.title}>Performance Insights</Text>
            </View>
            <View style={styles.headerIcon}>
              <BarChart3 size={32} color={Colors.black} />
            </View>
          </View>
        </LinearGradient>


        {/* Soil Moisture Trend - Line Chart */}
        <View style={styles.section}>
          <LineChart
            data={moistureData}
            labels={moistureLabels}
            title="Soil Moisture Trend (12 Months)"
            color={Colors.primary}
            height={240}
            unit="%"
            yAxisSuffix="%"
          />
        </View>

        {/* Weekly Moisture Levels - Bar Chart */}
        <View style={styles.section}>
          <BarChart
            data={weeklyMoisture}
            labels={weeklyLabels}
            title="Weekly Moisture Levels"
            color={Colors.secondary}
            height={240}
            unit="%"
            yAxisSuffix="%"
          />
        </View>

        {/* Field Status Distribution - Pie Chart */}
        <View style={styles.section}>
          <PieChart
            data={fieldDistribution}
            title="Field Status Distribution"
            height={280}
          />
        </View>


        {/* Performance Metrics Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Target size={24} color={Colors.primary} />
            <Text style={styles.cardTitle}>Key Performance Indicators</Text>
          </View>
          <View style={styles.metricsGrid}>
            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>Total Water Saved</Text>
              <Text style={styles.metricValue}>{mockAnalytics.totalWaterSaved}%</Text>
            </View>
            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>Fields Monitored</Text>
              <Text style={styles.metricValue}>{mockAnalytics.fieldsMonitored}</Text>
            </View>
          </View>
        </View>

        {/* Advanced Analytics Link */}
        <TouchableOpacity
          style={styles.advancedButton}
          onPress={() => navigation.navigate('AdvancedAnalytics')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.advancedGradient}
          >
            <BarChart3 size={24} color={Colors.black} />
            <Text style={styles.advancedText}>View Advanced Analytics</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* AI Insights Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Award size={24} color={Colors.secondary} />
            <Text style={styles.cardTitle}>AI Insights & Recommendations</Text>
          </View>
          <View style={styles.insightBox}>
            <View style={styles.insightHeader}>
              <Calendar size={20} color={Colors.primary} />
              <Text style={styles.insightLabel}>Current Performance</Text>
            </View>
            <Text style={styles.insightText}>
              Your fields are performing above average. Field monitoring has resulted in
              significant water savings. All monitored fields show
              consistent improvement in soil moisture retention.
            </Text>
          </View>
          <View style={styles.insightBox}>
            <View style={styles.insightHeader}>
              <TrendingUp size={20} color={Colors.secondary} />
              <Text style={styles.insightLabel}>Recommendation</Text>
            </View>
            <Text style={styles.insightText}>
              Continue monitoring soil moisture levels. Consider expanding monitoring to
              additional fields for maximum impact. Optimal monitoring window: Next 2-3 weeks.
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
  heroHeader: {
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
  headerIcon: {
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
  metricsSection: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
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
    ...Colors.shadow.md,
    borderWidth: 2,
    borderColor: Colors.black,
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
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  metricItem: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.text,
  },
  insightBox: {
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  insightLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  insightText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    lineHeight: 22,
  },
  advancedButton: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.lg,
    overflow: 'hidden',
  },
  advancedGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 18,
  },
  advancedText: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.black,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

