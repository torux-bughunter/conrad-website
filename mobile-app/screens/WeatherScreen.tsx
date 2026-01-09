import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Cloud, Sun, Droplets, Wind, Thermometer, Eye, Calendar } from 'lucide-react-native';
import { LineChart } from '../components/LineChart';
import { Colors } from '../constants/Colors';

interface WeatherData {
  current: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    visibility: number;
    condition: string;
    icon: string;
  };
  forecast: Array<{
    day: string;
    high: number;
    low: number;
    condition: string;
    precipitation: number;
  }>;
  hourly: Array<{
    time: string;
    temperature: number;
    precipitation: number;
  }>;
}

export default function WeatherScreen() {
  const [weather] = useState<WeatherData>({
    current: {
      temperature: 28,
      humidity: 45,
      windSpeed: 12,
      visibility: 10,
      condition: 'Partly Cloudy',
      icon: 'partly-cloudy',
    },
    forecast: [
      { day: 'Today', high: 32, low: 22, condition: 'Sunny', precipitation: 0 },
      { day: 'Tomorrow', high: 30, low: 21, condition: 'Partly Cloudy', precipitation: 10 },
      { day: 'Wed', high: 28, low: 20, condition: 'Cloudy', precipitation: 30 },
      { day: 'Thu', high: 26, low: 19, condition: 'Rain', precipitation: 70 },
      { day: 'Fri', high: 27, low: 20, condition: 'Partly Cloudy', precipitation: 20 },
    ],
    hourly: [
      { time: 'Now', temperature: 28, precipitation: 0 },
      { time: '2PM', temperature: 30, precipitation: 0 },
      { time: '4PM', temperature: 31, precipitation: 0 },
      { time: '6PM', temperature: 29, precipitation: 0 },
      { time: '8PM', temperature: 26, precipitation: 0 },
      { time: '10PM', temperature: 24, precipitation: 0 },
      { time: '12AM', temperature: 22, precipitation: 0 },
    ],
  });

  const hourlyTemps = weather.hourly.map(h => h.temperature);
  const hourlyLabels = weather.hourly.map(h => h.time);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Hero Header */}
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greeting}>Weather Forecast</Text>
              <Text style={styles.title}>{weather.current.temperature}°C</Text>
              <Text style={styles.subtitle}>{weather.current.condition}</Text>
            </View>
            <View style={styles.weatherIcon}>
              <Sun size={48} color={Colors.black} />
            </View>
          </View>
        </LinearGradient>

        {/* Current Conditions Grid */}
        <View style={styles.conditionsGrid}>
          <View style={styles.conditionCard}>
            <Droplets size={24} color={Colors.primary} />
            <Text style={styles.conditionValue}>{weather.current.humidity}%</Text>
            <Text style={styles.conditionLabel}>Humidity</Text>
          </View>
          <View style={styles.conditionCard}>
            <Wind size={24} color={Colors.secondary} />
            <Text style={styles.conditionValue}>{weather.current.windSpeed} km/h</Text>
            <Text style={styles.conditionLabel}>Wind Speed</Text>
          </View>
          <View style={styles.conditionCard}>
            <Eye size={24} color={Colors.primary} />
            <Text style={styles.conditionValue}>{weather.current.visibility} km</Text>
            <Text style={styles.conditionLabel}>Visibility</Text>
          </View>
        </View>

        {/* Hourly Temperature Chart */}
        <View style={styles.section}>
          <LineChart
            data={hourlyTemps}
            labels={hourlyLabels}
            title="24-Hour Temperature Forecast"
            color={Colors.primary}
            unit="°C"
            yAxisSuffix="°C"
            height={200}
          />
        </View>

        {/* 5-Day Forecast */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5-Day Forecast</Text>
          <View style={styles.forecastCard}>
            {weather.forecast.map((day, index) => (
              <View key={index} style={styles.forecastItem}>
                <Text style={styles.forecastDay}>{day.day}</Text>
                <View style={styles.forecastTemp}>
                  <Text style={styles.forecastHigh}>{day.high}°</Text>
                  <Text style={styles.forecastLow}>{day.low}°</Text>
                </View>
                <View style={styles.precipitationBar}>
                  <View style={[styles.precipitationFill, { width: `${day.precipitation}%` }]} />
                </View>
                <Text style={styles.precipitationText}>{day.precipitation}%</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Weather Impact Analysis */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Calendar size={24} color={Colors.primary} />
            <Text style={styles.cardTitle}>Impact on Fields</Text>
          </View>
          <View style={styles.impactBox}>
            <Text style={styles.impactTitle}>Optimal Monitoring Window</Text>
            <Text style={styles.impactText}>
              Rain expected in 48 hours. Recommend monitoring fields before precipitation
              to maximize water retention. Current conditions are ideal for monitoring.
            </Text>
          </View>
          <View style={styles.impactBox}>
            <Text style={styles.impactTitle}>Field Recommendations</Text>
            <Text style={styles.impactText}>
              • Field Zone A: Monitor within 24 hours{'\n'}
              • Field Zone B: Monitor conditions, check if moisture drops below 20%{'\n'}
              • All fields: Prepare for increased moisture after rain
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
    fontSize: 48,
    fontWeight: '900',
    color: Colors.black,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    opacity: 0.8,
  },
  weatherIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  conditionsGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  conditionCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  conditionValue: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  conditionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  forecastCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  forecastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  forecastDay: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
    width: 80,
  },
  forecastTemp: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },
  forecastHigh: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
  },
  forecastLow: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  precipitationBar: {
    width: 60,
    height: 4,
    backgroundColor: Colors.neutral[200],
    borderRadius: 2,
    marginRight: 8,
  },
  precipitationFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  precipitationText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
    width: 40,
    textAlign: 'right',
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
  impactBox: {
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  impactTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  impactText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    lineHeight: 22,
  },
});




