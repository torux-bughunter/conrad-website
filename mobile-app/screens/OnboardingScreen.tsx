import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { Droplets, BarChart3, Zap, ArrowRight, CheckCircle } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

interface OnboardingSlide {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string[];
}

export default function OnboardingScreen({ navigation }: any) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: OnboardingSlide[] = [
    {
      title: 'Welcome to Gelionyx',
      description: 'Revolutionary hydrogel technology for sustainable agriculture. Monitor, predict, and optimize your fields with AI-powered insights.',
      icon: <Droplets size={80} color={Colors.black} />,
      gradient: [Colors.primary, Colors.secondary],
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Track soil moisture, temperature, and field conditions in real-time. Get instant alerts when action is needed.',
      icon: <BarChart3 size={80} color={Colors.black} />,
      gradient: [Colors.secondary, Colors.primary],
    },
    {
      title: 'AI-Powered Predictions',
      description: 'Leverage advanced machine learning to predict optimal deployment windows.',
      icon: <Zap size={80} color={Colors.black} />,
      gradient: [Colors.primary, Colors.secondary],
    },
  ];

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false, listener: (event: any) => {
      const index = Math.round(event.nativeEvent.contentOffset.x / width);
      setCurrentIndex(index);
    }}
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      // Scroll to next slide
      return;
    }
    // Navigate to main app
    navigation.replace('Dashboard');
  };

  const handleSkip = () => {
    if (navigation?.navigate) {
      navigation.navigate('Dashboard');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <LinearGradient
              colors={slide.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradient}
            >
              <View style={styles.iconContainer}>
                {slide.icon}
              </View>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </LinearGradient>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && styles.indicatorActive,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.nextButtonGradient}
          >
            <Text style={styles.nextButtonText}>
              {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
            </Text>
            <ArrowRight size={20} color={Colors.black} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  skipContainer: {
    padding: 20,
    alignItems: 'flex-end',
  },
  skipText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textSecondary,
  },
  slide: {
    width,
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  iconContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.lg,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: -1,
  },
  description: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
    textAlign: 'center',
    lineHeight: 28,
    opacity: 0.9,
    paddingHorizontal: 20,
  },
  footer: {
    padding: 20,
    gap: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.neutral[300],
  },
  indicatorActive: {
    width: 24,
    backgroundColor: Colors.primary,
  },
  nextButton: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.lg,
    overflow: 'hidden',
  },
  nextButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 20,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.black,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

