import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Droplets, BarChart3, Map, Package, Cloud, Bell, Settings, ArrowRight, X, CheckCircle } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

interface TutorialStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  gradient: string[];
}

export default function TutorialScreen({ navigation }: any) {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps: TutorialStep[] = [
    {
      title: 'Dashboard Overview',
      description: 'Your command center for field monitoring',
      icon: <Droplets size={48} color={Colors.black} />,
      details: [
        'View real-time field status and critical alerts',
        'Monitor performance metrics',
        'Access quick actions for analytics',
        'Track overall system health at a glance',
      ],
      gradient: [Colors.primary, Colors.secondary],
    },
    {
      title: 'Field Management',
      description: 'Comprehensive field monitoring and zone management',
      icon: <Map size={48} color={Colors.black} />,
      details: [
        'View all your agricultural fields in one place',
        'Monitor soil moisture and temperature in real-time',
        'Manage field zones for precise monitoring',
        'Get AI-powered recommendations for each field',
      ],
      gradient: [Colors.secondary, Colors.primary],
    },
    {
      title: 'Analytics & Insights',
      description: 'Data-driven decision making with AI',
      icon: <BarChart3 size={48} color={Colors.black} />,
      details: [
        'Track performance trends over time',
        'Compare field performance metrics',
        'View advanced analytics',
        'Get predictive insights for future planning',
      ],
      gradient: [Colors.primary, Colors.secondary],
    },
    {
      title: 'Weather Integration',
      description: 'Weather-based recommendations',
      icon: <Cloud size={48} color={Colors.black} />,
      details: [
        'View 5-day weather forecasts',
        'Get monitoring timing recommendations',
        'Monitor temperature and precipitation trends',
        'Adjust strategies based on weather patterns',
      ],
      gradient: [Colors.primary, Colors.secondary],
    },
    {
      title: 'Notifications & Alerts',
      description: 'Stay informed with real-time updates',
      icon: <Bell size={48} color={Colors.black} />,
      details: [
        'Receive critical moisture alerts',
        'Get field monitoring notifications',
        'Weather updates and recommendations',
        'System status and maintenance alerts',
      ],
      gradient: [Colors.secondary, Colors.primary],
    },
    {
      title: 'Environmental Impact',
      description: 'Track environmental metrics',
      icon: <Settings size={48} color={Colors.black} />,
      details: [
        'Track water conservation and CO2 reduction',
        'View UN SDG alignment metrics',
        'Export reports for stakeholders',
      ],
      gradient: [Colors.primary, Colors.secondary],
    },
  ];

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    if (navigation?.navigate) {
      navigation.navigate('Dashboard');
    }
  };

  const handleComplete = () => {
    if (navigation?.navigate) {
      navigation.navigate('Dashboard');
    }
  };

  const currentStepData = tutorialSteps[currentStep];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <X size={20} color={Colors.textSecondary} />
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          {tutorialSteps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index === currentStep && styles.progressDotActive,
                index < currentStep && styles.progressDotCompleted,
              ]}
            />
          ))}
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={currentStepData.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientCard}
        >
          <View style={styles.iconContainer}>
            {currentStepData.icon}
          </View>
          <Text style={styles.title}>{currentStepData.title}</Text>
          <Text style={styles.description}>{currentStepData.description}</Text>
        </LinearGradient>

        <View style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>Key Features:</Text>
          {currentStepData.details.map((detail, index) => (
            <View key={index} style={styles.detailItem}>
              <CheckCircle size={20} color={Colors.primary} />
              <Text style={styles.detailText}>{detail}</Text>
            </View>
          ))}
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Pro Tip</Text>
          <Text style={styles.tipText}>
            {currentStep === 0 && 'Use the dashboard to quickly identify fields that need immediate attention.'}
            {currentStep === 1 && 'Long-press on any field card to access zone management and detailed settings.'}
            {currentStep === 2 && 'Check advanced analytics for year-over-year comparisons.'}
            {currentStep === 3 && 'Monitor fields during optimal weather windows for best results.'}
            {currentStep === 4 && 'Weather forecasts help you plan monitoring 48 hours in advance.'}
            {currentStep === 5 && 'Enable push notifications to never miss critical field alerts.'}
            {currentStep === 6 && 'Export impact reports for stakeholder presentations.'}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.navigationButtons}>
          {currentStep > 0 && (
            <TouchableOpacity style={styles.backButton} onPress={handlePrevious}>
              <Text style={styles.backButtonText}>Previous</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <LinearGradient
              colors={[Colors.primary, Colors.secondary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.nextButtonGradient}
            >
              <Text style={styles.nextButtonText}>
                {currentStep === tutorialSteps.length - 1 ? 'Get Started' : 'Next'}
              </Text>
              <ArrowRight size={20} color={Colors.black} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  skipText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.neutral[300],
  },
  progressDotActive: {
    width: 24,
    backgroundColor: Colors.primary,
  },
  progressDotCompleted: {
    backgroundColor: Colors.success,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  gradientCard: {
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
  },
  detailsCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Colors.black,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  detailText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    lineHeight: 20,
  },
  tipCard: {
    backgroundColor: Colors.background,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.text,
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: Colors.neutral[200],
  },
  navigationButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  backButton: {
    flex: 1,
    padding: 18,
    borderRadius: 16,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.black,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
  },
  nextButton: {
    flex: 2,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.black,
    overflow: 'hidden',
  },
  nextButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 18,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.black,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});




