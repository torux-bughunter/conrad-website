import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar, Clock, MapPin, CheckCircle, AlertCircle, Plus } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

interface ScheduledDeployment {
  id: string;
  fieldName: string;
  batchId: string;
  scheduledDate: Date;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  quantity: number;
  priority: 'high' | 'medium' | 'low';
}

export default function ScheduleScreen() {
  const [deployments] = useState<ScheduledDeployment[]>([
    {
      id: '1',
      fieldName: 'Field Zone A',
      batchId: 'B-04',
      scheduledDate: new Date(Date.now() + 1000 * 60 * 60 * 2),
      status: 'scheduled',
      quantity: 125,
      priority: 'high',
    },
    {
      id: '2',
      fieldName: 'Field Zone B',
      batchId: 'B-05',
      scheduledDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      status: 'scheduled',
      quantity: 90,
      priority: 'medium',
    },
    {
      id: '3',
      fieldName: 'Field Zone A',
      batchId: 'B-03',
      scheduledDate: new Date(Date.now() - 1000 * 60 * 60 * 12),
      status: 'completed',
      quantity: 100,
      priority: 'low',
    },
  ]);

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `In ${days} day${days > 1 ? 's' : ''}`;
    if (hours > 0) return `In ${hours} hour${hours > 1 ? 's' : ''}`;
    return 'Now';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return Colors.success;
      case 'in-progress':
        return Colors.primary;
      case 'cancelled':
        return Colors.danger;
      default:
        return Colors.secondary;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return Colors.danger;
      case 'medium':
        return Colors.warning;
      default:
        return Colors.textSecondary;
    }
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
              <Text style={styles.greeting}>Deployment Schedule</Text>
              <Text style={styles.title}>Upcoming Deployments</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={28} color={Colors.black} />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Schedule Stats */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{deployments.filter(d => d.status === 'scheduled').length}</Text>
            <Text style={styles.statLabel}>Scheduled</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{deployments.filter(d => d.status === 'in-progress').length}</Text>
            <Text style={styles.statLabel}>In Progress</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{deployments.filter(d => d.status === 'completed').length}</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>

        {/* Deployments List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Deployment Schedule</Text>
          {deployments.map((deployment) => (
            <View key={deployment.id} style={styles.deploymentCard}>
              <View style={styles.deploymentHeader}>
                <View style={styles.deploymentInfo}>
                  <View style={styles.deploymentTitleRow}>
                    <Text style={styles.deploymentTitle}>{deployment.fieldName}</Text>
                    <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(deployment.priority) }]}>
                      <Text style={styles.priorityText}>{deployment.priority.toUpperCase()}</Text>
                    </View>
                  </View>
                  <Text style={styles.deploymentBatch}>Batch {deployment.batchId}</Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(deployment.status) }]}>
                  {deployment.status === 'completed' ? (
                    <CheckCircle size={16} color={Colors.white} />
                  ) : (
                    <AlertCircle size={16} color={Colors.white} />
                  )}
                </View>
              </View>
              <View style={styles.deploymentDetails}>
                <View style={styles.detailItem}>
                  <Clock size={16} color={Colors.textSecondary} />
                  <Text style={styles.detailText}>{formatDate(deployment.scheduledDate)}</Text>
                </View>
                <View style={styles.detailItem}>
                  <MapPin size={16} color={Colors.textSecondary} />
                  <Text style={styles.detailText}>{deployment.quantity}kg</Text>
                </View>
              </View>
              {deployment.status === 'scheduled' && (
                <View style={styles.deploymentActions}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.actionButton, styles.cancelButton]}>
                    <Text style={[styles.actionText, { color: Colors.danger }]}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              )}
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
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  statValue: {
    fontSize: 32,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 4,
  },
  statLabel: {
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
  deploymentCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  deploymentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  deploymentInfo: {
    flex: 1,
  },
  deploymentTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  deploymentTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  priorityText: {
    fontSize: 9,
    fontWeight: '900',
    color: Colors.white,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  deploymentBatch: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  statusBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deploymentDetails: {
    flexDirection: 'row',
    gap: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
  },
  deploymentActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  actionButton: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: Colors.danger + '10',
    borderColor: Colors.danger,
  },
  actionText: {
    fontSize: 13,
    fontWeight: '800',
    color: Colors.primary,
    textTransform: 'uppercase',
  },
});




