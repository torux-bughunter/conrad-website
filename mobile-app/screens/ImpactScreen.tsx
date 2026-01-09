import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Leaf, Droplets, TrendingUp, Award, Globe, Target, Calendar } from 'lucide-react-native';
import { LineChart } from '../components/LineChart';
import { PieChart } from '../components/PieChart';
import { Colors } from '../constants/Colors';

export default function ImpactScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState<'month' | 'year' | 'all'>('year');

  const environmentalImpact = {
    waterSaved: 1250000, // liters
    co2Reduced: 450, // kg
    fieldsImproved: 12,
  };

  const sustainabilityData = [
    { name: 'Water Saved', value: 40, color: Colors.primary, legendFontColor: Colors.text, legendFontSize: 12 },
    { name: 'CO2 Reduced', value: 25, color: Colors.secondary, legendFontColor: Colors.text, legendFontSize: 12 },
  ];

  const impactTimeline = [120, 180, 250, 320, 380, 450];
  const timelineLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

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
              <Text style={styles.greeting}>Environmental Impact</Text>
              <Text style={styles.title}>Sustainability Metrics</Text>
            </View>
            <View style={styles.iconContainer}>
              <Leaf size={28} color={Colors.black} />
            </View>
          </View>
        </LinearGradient>

        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {(['month', 'year', 'all'] as const).map((period) => (
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

        {/* Key Metrics Grid */}
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <View style={styles.metricIcon}>
              <Droplets size={32} color={Colors.primary} />
            </View>
            <Text style={styles.metricValue}>{(environmentalImpact.waterSaved / 1000).toFixed(0)}K</Text>
            <Text style={styles.metricLabel}>Liters Water Saved</Text>
            <Text style={styles.metricSubtext}>Equivalent to 500 households</Text>
          </View>
          <View style={styles.metricCard}>
            <View style={styles.metricIcon}>
              <Leaf size={32} color={Colors.success} />
            </View>
            <Text style={styles.metricValue}>{environmentalImpact.co2Reduced}</Text>
            <Text style={styles.metricLabel}>kg CO2 Reduced</Text>
            <Text style={styles.metricSubtext}>Carbon footprint reduction</Text>
          </View>
        </View>

        {/* Impact Distribution */}
        <View style={styles.section}>
          <PieChart
            data={sustainabilityData}
            title="Impact Distribution"
            height={280}
          />
        </View>

        {/* CO2 Reduction Trend */}
        <View style={styles.section}>
          <LineChart
            data={impactTimeline}
            labels={timelineLabels}
            title="CO2 Reduction Trend (kg)"
            color={Colors.success}
            height={200}
            unit="kg"
            yAxisSuffix="kg"
          />
        </View>

        {/* Impact Summary */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Globe size={24} color={Colors.primary} />
            <Text style={styles.cardTitle}>Overall Impact</Text>
          </View>
          <View style={styles.impactList}>
            <View style={styles.impactItem}>
              <Target size={20} color={Colors.primary} />
              <View style={styles.impactContent}>
                <Text style={styles.impactLabel}>Fields Improved</Text>
                <Text style={styles.impactValue}>{environmentalImpact.fieldsImproved} fields</Text>
              </View>
            </View>
            <View style={styles.impactItem}>
              <TrendingUp size={20} color={Colors.success} />
              <View style={styles.impactContent}>
              </View>
            </View>
            <View style={styles.impactItem}>
              <Award size={20} color={Colors.warning} />
              <View style={styles.impactContent}>
                <Text style={styles.impactLabel}>Sustainability Score</Text>
                <Text style={styles.impactValue}>94/100</Text>
              </View>
            </View>
          </View>
        </View>

        {/* UN SDG Alignment */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Globe size={24} color={Colors.secondary} />
            <Text style={styles.cardTitle}>UN SDG Alignment</Text>
          </View>
          <View style={styles.sdgList}>
            <View style={styles.sdgItem}>
              <Text style={styles.sdgNumber}>2</Text>
              <Text style={styles.sdgText}>Zero Hunger - Improved food security</Text>
            </View>
            <View style={styles.sdgItem}>
              <Text style={styles.sdgNumber}>6</Text>
              <Text style={styles.sdgText}>Clean Water - Water conservation</Text>
            </View>
            <View style={styles.sdgItem}>
              <Text style={styles.sdgNumber}>13</Text>
              <Text style={styles.sdgText}>Climate Action - CO2 reduction</Text>
            </View>
            <View style={styles.sdgItem}>
              <Text style={styles.sdgNumber}>15</Text>
              <Text style={styles.sdgText}>Life on Land - Sustainable agriculture</Text>
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
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  metricCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
    alignItems: 'center',
  },
  metricIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  metricValue: {
    fontSize: 32,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.text,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  metricSubtext: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.textSecondary,
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
  impactList: {
    gap: 16,
  },
  impactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    backgroundColor: Colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  impactContent: {
    flex: 1,
  },
  impactLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  impactValue: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
  },
  sdgList: {
    gap: 12,
  },
  sdgItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: Colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  sdgNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    color: Colors.black,
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 40,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  sdgText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
});




