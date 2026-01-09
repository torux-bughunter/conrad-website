import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Droplets, AlertCircle, CheckCircle, ArrowRight, Thermometer } from 'lucide-react-native';
import { Field } from '../types';
import { Colors } from '../constants/Colors';

interface FieldCardProps {
  field: Field;
  onPress: () => void;
  onLongPress?: () => void;
}

export const FieldCard: React.FC<FieldCardProps> = ({ field, onPress, onLongPress }) => {
  const getStatusColor = () => {
    switch (field.status) {
      case 'critical':
        return Colors.danger;
      case 'active':
        return Colors.success;
      default:
        return Colors.warning;
    }
  };

  const getStatusIcon = () => {
    switch (field.status) {
      case 'critical':
        return <AlertCircle size={14} color={field.status === 'critical' ? Colors.white : Colors.danger} />;
      case 'active':
        return <CheckCircle size={14} color={Colors.success} />;
      default:
        return <Droplets size={14} color={Colors.warning} />;
    }
  };

  const getGradientColors = () => {
    switch (field.status) {
      case 'critical':
        return [Colors.danger, '#FF6B6B'];
      case 'active':
        return [Colors.primary, Colors.secondary];
      default:
        return [Colors.white, Colors.neutral[100]];
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={getGradientColors()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{field.name}</Text>
            <View style={[styles.statusBadge, { backgroundColor: field.status === 'critical' ? Colors.black : Colors.white }]}>
              {getStatusIcon()}
              <Text style={[styles.status, { color: field.status === 'critical' ? Colors.white : getStatusColor() }]}>
                {field.status.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Crop Type</Text>
            <Text style={styles.value}>{field.cropType}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Area</Text>
            <Text style={styles.value}>{field.area} hectares</Text>
          </View>
        </View>

        <View style={styles.metrics}>
          <View style={styles.metric}>
            <View style={styles.metricIconContainer}>
              <Droplets size={24} color={field.status === 'critical' ? Colors.white : Colors.secondary} />
            </View>
            <View style={styles.metricText}>
              <Text style={[styles.metricValue, { color: field.status === 'critical' ? Colors.white : Colors.text }]}>
                {field.moisture}%
              </Text>
              <Text style={[styles.metricLabel, { color: field.status === 'critical' ? Colors.white : Colors.textSecondary }]}>
                Moisture
              </Text>
            </View>
          </View>
          <View style={styles.metric}>
            <View style={styles.metricIconContainer}>
              <Thermometer size={24} color={field.status === 'critical' ? Colors.white : Colors.primary} />
            </View>
            <View style={styles.metricText}>
              <Text style={[styles.metricValue, { color: field.status === 'critical' ? Colors.white : Colors.text }]}>
                {field.temperature}°C
              </Text>
              <Text style={[styles.metricLabel, { color: field.status === 'critical' ? Colors.white : Colors.textSecondary }]}>
                Temperature
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.viewDetails, { color: field.status === 'critical' ? Colors.white : Colors.primary }]}>
            View Details
          </Text>
          <ArrowRight size={16} color={field.status === 'critical' ? Colors.white : Colors.primary} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: Colors.black,
    overflow: 'hidden',
  },
  gradient: {
    padding: 18,
  },
  header: {
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: Colors.black,
    flex: 1,
    marginRight: 12,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  status: {
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  content: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.6)',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.black,
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  metric: {
    alignItems: 'center',
    gap: 8,
  },
  metricIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricText: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.text,
  },
  metricLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  viewDetails: {
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

