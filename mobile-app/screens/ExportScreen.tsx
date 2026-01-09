import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Download, FileText, Calendar, BarChart3, Mail, Share2, FileSpreadsheet } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

interface ExportOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  format: 'PDF' | 'CSV' | 'Excel';
}

export default function ExportScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year' | 'custom'>('month');
  const [selectedFormat, setSelectedFormat] = useState<'PDF' | 'CSV' | 'Excel'>('PDF');

  const exportOptions: ExportOption[] = [
    {
      id: '1',
      title: 'Field Analytics Report',
      description: 'Comprehensive field performance data and metrics',
      icon: <BarChart3 size={24} color={Colors.primary} />,
      format: 'PDF',
    },
    {
      id: '2',
      title: 'Deployment History',
      description: 'Complete record of all hydrogel deployments',
      icon: <Calendar size={24} color={Colors.secondary} />,
      format: 'CSV',
    },
    {
      id: '3',
      title: 'Financial Summary',
      description: 'ROI analysis and cost breakdown',
      icon: <FileSpreadsheet size={24} color={Colors.primary} />,
      format: 'Excel',
    },
    {
      id: '4',
      title: 'Weather Impact Report',
      description: 'Weather data correlation with field performance',
      icon: <FileText size={24} color={Colors.secondary} />,
      format: 'PDF',
    },
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
              <Text style={styles.greeting}>Export & Share</Text>
              <Text style={styles.title}>Generate Reports</Text>
            </View>
            <View style={styles.iconContainer}>
              <Download size={28} color={Colors.black} />
            </View>
          </View>
        </LinearGradient>

        {/* Period Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Time Period</Text>
          <View style={styles.periodGrid}>
            {(['week', 'month', 'year', 'custom'] as const).map((period) => (
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
        </View>

        {/* Format Selector */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Export Format</Text>
          <View style={styles.formatGrid}>
            {(['PDF', 'CSV', 'Excel'] as const).map((format) => (
              <TouchableOpacity
                key={format}
                style={[
                  styles.formatButton,
                  selectedFormat === format && styles.formatButtonActive,
                ]}
                onPress={() => setSelectedFormat(format)}
              >
                <Text
                  style={[
                    styles.formatText,
                    selectedFormat === format && styles.formatTextActive,
                  ]}
                >
                  {format}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Export Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Reports</Text>
          {exportOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.exportCard}
              activeOpacity={0.8}
            >
              <View style={styles.exportIcon}>{option.icon}</View>
              <View style={styles.exportContent}>
                <Text style={styles.exportTitle}>{option.title}</Text>
                <Text style={styles.exportDescription}>{option.description}</Text>
                <View style={styles.exportFooter}>
                  <Text style={styles.exportFormat}>{option.format}</Text>
                  <Text style={styles.exportSize}>~2.5 MB</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.exportButton}>
                <Download size={20} color={Colors.primary} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Share Options */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Share2 size={24} color={Colors.primary} />
            <Text style={styles.cardTitle}>Share Reports</Text>
          </View>
          <View style={styles.shareGrid}>
            <TouchableOpacity style={styles.shareButton}>
              <Mail size={20} color={Colors.primary} />
              <Text style={styles.shareText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Share2 size={20} color={Colors.secondary} />
              <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <FileText size={20} color={Colors.primary} />
              <Text style={styles.shareText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Export */}
        <TouchableOpacity style={styles.quickExportButton} activeOpacity={0.8}>
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.quickExportGradient}
          >
            <Download size={24} color={Colors.black} />
            <Text style={styles.quickExportText}>Export All Data</Text>
          </LinearGradient>
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
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  periodGrid: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  periodButton: {
    flex: 1,
    minWidth: '22%',
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
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  periodTextActive: {
    color: Colors.black,
  },
  formatGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  formatButton: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.neutral[300],
    alignItems: 'center',
  },
  formatButtonActive: {
    backgroundColor: Colors.secondary,
    borderColor: Colors.black,
  },
  formatText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.textSecondary,
  },
  formatTextActive: {
    color: Colors.black,
  },
  exportCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
    gap: 12,
  },
  exportIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exportContent: {
    flex: 1,
    gap: 4,
  },
  exportTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
  },
  exportDescription: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  exportFooter: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  exportFormat: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.primary,
    textTransform: 'uppercase',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: Colors.primary + '20',
    borderRadius: 8,
  },
  exportSize: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  exportButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.neutral[300],
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
  shareGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    borderRadius: 16,
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  shareText: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
  },
  quickExportButton: {
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.lg,
    overflow: 'hidden',
  },
  quickExportGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 20,
  },
  quickExportText: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.black,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});




