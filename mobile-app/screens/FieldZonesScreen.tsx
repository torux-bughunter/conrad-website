import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Map, Plus, Edit, Trash2, Droplets, Thermometer } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

interface Zone {
  id: string;
  name: string;
  area: number;
  cropType: string;
  moisture: number;
  temperature: number;
  status: 'active' | 'monitoring' | 'critical';
}

export default function FieldZonesScreen({ route, navigation }: any) {
  const { fieldId } = route.params || {};
  const [zones] = useState<Zone[]>([
    { id: '1', name: 'Zone A1', area: 0.8, cropType: 'Maize', moisture: 12, temperature: 28, status: 'critical' },
    { id: '2', name: 'Zone A2', area: 0.9, cropType: 'Maize', moisture: 18, temperature: 27, status: 'monitoring' },
    { id: '3', name: 'Zone A3', area: 0.8, cropType: 'Maize', moisture: 22, temperature: 26, status: 'active' },
  ]);

  const totalArea = zones.reduce((sum, z) => sum + z.area, 0);

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
              <Text style={styles.greeting}>Field Zones</Text>
              <Text style={styles.title}>Zone Management</Text>
              <Text style={styles.subtitle}>{totalArea.toFixed(1)} hectares total</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={28} color={Colors.black} />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Zone Map Visualization */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Zone Map</Text>
          <View style={styles.mapContainer}>
            <View style={styles.mapGrid}>
              {zones.map((zone, index) => (
                <TouchableOpacity
                  key={zone.id}
                  style={[
                    styles.mapZone,
                    {
                      backgroundColor:
                        zone.status === 'critical'
                          ? Colors.danger
                          : zone.status === 'active'
                          ? Colors.primary
                          : Colors.secondary,
                    },
                  ]}
                >
                  <Text style={styles.mapZoneLabel}>{zone.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Zones List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Zones ({zones.length})</Text>
          {zones.map((zone) => (
            <View key={zone.id} style={styles.zoneCard}>
              <View style={styles.zoneHeader}>
                <View style={styles.zoneInfo}>
                  <Text style={styles.zoneName}>{zone.name}</Text>
                  <Text style={styles.zoneDetails}>
                    {zone.area} ha • {zone.cropType}
                  </Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: zone.status === 'critical' ? Colors.danger : zone.status === 'active' ? Colors.success : Colors.warning }]}>
                  <Text style={styles.statusText}>{zone.status.toUpperCase()}</Text>
                </View>
              </View>
              <View style={styles.zoneMetrics}>
                <View style={styles.metric}>
                  <Droplets size={20} color={Colors.secondary} />
                  <Text style={styles.metricValue}>{zone.moisture}%</Text>
                  <Text style={styles.metricLabel}>Moisture</Text>
                </View>
                <View style={styles.metric}>
                  <Thermometer size={20} color={Colors.primary} />
                  <Text style={styles.metricValue}>{zone.temperature}°C</Text>
                  <Text style={styles.metricLabel}>Temperature</Text>
                </View>
              </View>
              <View style={styles.zoneActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Edit size={18} color={Colors.primary} />
                  <Text style={styles.actionText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
                  <Trash2 size={18} color={Colors.danger} />
                  <Text style={[styles.actionText, { color: Colors.danger }]}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    opacity: 0.8,
    marginTop: 4,
  },
  addButton: {
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
  mapContainer: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  mapGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  mapZone: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
  },
  mapZoneLabel: {
    fontSize: 12,
    fontWeight: '900',
    color: Colors.black,
  },
  zoneCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  zoneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  zoneInfo: {
    flex: 1,
  },
  zoneName: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 4,
  },
  zoneDetails: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '900',
    color: Colors.white,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  zoneMetrics: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
  },
  metricLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  zoneActions: {
    flexDirection: 'row',
    gap: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
  },
  deleteButton: {
    backgroundColor: Colors.danger + '10',
    borderColor: Colors.danger,
  },
  actionText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
  },
});




