import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../constants/Colors';

interface GelionyxLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  style?: any;
  useImage?: boolean;
}

export default function GelionyxLogo({ size = 'md', showTagline = false, style, useImage = false }: GelionyxLogoProps) {
  const sizeStyles = {
    sm: { fontSize: 18, waveWidth: 35, waveHeight: 6 },
    md: { fontSize: 24, waveWidth: 50, waveHeight: 8 },
    lg: { fontSize: 32, waveWidth: 70, waveHeight: 12 },
    xl: { fontSize: 48, waveWidth: 100, waveHeight: 16 },
  };

  const currentSize = sizeStyles[size];

  const imageSizes = {
    sm: { width: 120, height: 60 },
    md: { width: 180, height: 90 },
    lg: { width: 240, height: 120 },
    xl: { width: 360, height: 180 },
  };

  if (useImage) {
    return (
      <View style={[styles.container, style]}>
        <Image 
          source={require('../assets/images/logo.png')}
          style={{ width: imageSizes[size].width, height: imageSizes[size].height, resizeMode: 'contain' }}
        />
      </View>
    );
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.logoContainer}>
        {/* Brand name with split colors - matching logo exactly */}
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontSize: currentSize.fontSize, color: Colors.white }]}>
            Geli
          </Text>
          <View style={styles.onyxContainer}>
            {/* Wavy lines above onyx - matching logo exactly */}
            <View style={[styles.waveContainer, { width: currentSize.waveWidth, height: currentSize.waveHeight }]}>
              <Svg width={currentSize.waveWidth} height={currentSize.waveHeight} viewBox="0 0 50 10">
                {/* Upper wave - darker blue */}
                <Path
                  d="M0 6 Q12.5 3, 25 6 T50 6"
                  stroke="#0F4C75"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Lower wave - lighter blue */}
                <Path
                  d="M0 8 Q12.5 5, 25 8 T50 8"
                  stroke="#4A90E2"
                  strokeWidth="1.5"
                  fill="none"
                />
              </Svg>
            </View>
            <Text style={[styles.text, { fontSize: currentSize.fontSize, color: '#4A90E2' }]}>
              onyx
            </Text>
          </View>
        </View>
      </View>
      
      {/* Tagline - matching logo exactly */}
      {showTagline && (
        <Text style={styles.tagline}>
          where water&apos;s tight, we make it <Text style={styles.taglineBlue}>right.</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  onyxContainer: {
    position: 'relative',
  },
  waveContainer: {
    position: 'absolute',
    top: -8,
    left: 0,
  },
  text: {
    fontWeight: '900',
    letterSpacing: -0.5,
    fontFamily: 'System',
  },
  tagline: {
    color: Colors.white,
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 4,
    opacity: 0.9,
    fontFamily: 'System',
  },
  taglineBlue: {
    color: '#4A90E2',
  },
});

