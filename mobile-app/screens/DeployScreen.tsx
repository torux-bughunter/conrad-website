import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { ArrowLeft, CheckCircle, Package, Calendar } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { Field } from '../types';

export default function DeployScreen({ route }: any) {
  const navigation = useNavigation();
  const { field }: { field?: Field } = route.params || {};
  const [batchId, setBatchId] = useState('B-04');
  const [quantity, setQuantity] = useState(field ? String(field.area * 50) : '125');
  const [deployed, setDeployed] = useState(false);

  const handleDeploy = () => {
    Alert.alert(
      'Confirm Deployment',
      `Deploy ${quantity}kg of batch ${batchId} to ${field?.name || 'selected field'}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            setDeployed(true);
            setTimeout(() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Dashboard' }],
                })
              );
            }, 2000);
          },
        },
      ]
    );
  };

  if (deployed) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.successContainer}>
          <View style={styles.successIcon}>
            <CheckCircle size={64} color={Colors.success} />
          </View>
          <Text style={styles.successTitle}>Deployment Scheduled!</Text>
          <Text style={styles.successText}>
            Batch {batchId} will be deployed within 2 hours
          </Text>
          <Text style={styles.successSubtext}>
            You'll receive a notification when deployment begins
          </Text>
        </View>
      </SafeAreaView>
    );
  }

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
          <Text style={styles.headerTitle}>Deploy Hydrogel</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Field Info */}
        {field && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Target Field</Text>
            <Text style={styles.fieldName}>{field.name}</Text>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Area:</Text>
              <Text style={styles.value}>{field.area} hectares</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Crop:</Text>
              <Text style={styles.value}>{field.cropType}</Text>
            </View>
          </View>
        )}

        {/* Deployment Details */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Package size={24} color={Colors.primary} />
            <Text style={styles.cardTitle}>Deployment Details</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Batch ID</Text>
            <TextInput
              style={styles.input}
              value={batchId}
              onChangeText={setBatchId}
              placeholder="Enter batch ID"
              placeholderTextColor={Colors.textSecondary}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Quantity (kg)</Text>
            <TextInput
              style={styles.input}
              value={quantity}
              onChangeText={setQuantity}
              placeholder="Enter quantity"
              keyboardType="numeric"
              placeholderTextColor={Colors.textSecondary}
            />
            <Text style={styles.inputHint}>
              Recommended: {field ? field.area * 50 : 50}kg per hectare
            </Text>
          </View>

          <View style={styles.summaryBox}>
            <Text style={styles.summaryLabel}>Deployment Summary</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Field:</Text>
              <Text style={styles.summaryValue}>{field?.name || 'Not selected'}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Batch:</Text>
              <Text style={styles.summaryValue}>{batchId}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Quantity:</Text>
              <Text style={styles.summaryValue}>{quantity}kg</Text>
            </View>
          </View>
        </View>

        {/* Schedule Option */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Calendar size={24} color={Colors.primary} />
            <Text style={styles.cardTitle}>Schedule Deployment</Text>
          </View>
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={() => navigation.navigate('Schedule')}
          >
            <Text style={styles.scheduleButtonText}>Schedule for Later</Text>
          </TouchableOpacity>
        </View>

        {/* Action Button */}
        <TouchableOpacity
          style={[styles.deployButton, { backgroundColor: Colors.primary }]}
          onPress={handleDeploy}
        >
          <Text style={styles.deployButtonText}>Confirm Deployment</Text>
        </TouchableOpacity>
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
  fieldName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
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
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: Colors.text,
    backgroundColor: Colors.background,
  },
  inputHint: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  summaryBox: {
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  deployButton: {
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
  deployButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  successIcon: {
    marginBottom: 24,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  successText: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  successSubtext: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  scheduleButton: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.black,
    alignItems: 'center',
    ...Colors.shadow.sm,
  },
  scheduleButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

