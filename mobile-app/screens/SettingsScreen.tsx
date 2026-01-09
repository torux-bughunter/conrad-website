import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, Bell, Moon, Globe, User, Shield, Download, Share2, HelpCircle, LogOut, Users, ArrowRight, DollarSign, Leaf } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

export default function SettingsScreen({ navigation }: any) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  const [alerts, setAlerts] = useState(true);

  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile', action: 'profile' },
        { icon: Shield, label: 'Privacy & Security', action: 'privacy' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Push Notifications', toggle: notifications, onToggle: setNotifications },
        { icon: Moon, label: 'Dark Mode', toggle: darkMode, onToggle: setDarkMode },
        { icon: Globe, label: 'Language', value: 'English', action: 'language' },
        { icon: Bell, label: 'Alert Thresholds', toggle: alerts, onToggle: setAlerts },
      ],
    },
    {
      title: 'Data & Sync',
      items: [
        { icon: Download, label: 'Auto Sync', toggle: autoSync, onToggle: setAutoSync },
        { icon: Download, label: 'Export Data', action: 'export' },
        { icon: Share2, label: 'Share Reports', action: 'share' },
      ],
    },
    {
      title: 'Business',
      items: [
        { icon: Leaf, label: 'Environmental Impact', action: 'impact' },
      ],
    },
    {
      title: 'Collaboration',
      items: [
        { icon: Users, label: 'Team Management', action: 'team' },
        { icon: Download, label: 'Export & Reports', action: 'export' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Tutorial & Guide', action: 'tutorial' },
        { icon: HelpCircle, label: 'Help Center', action: 'help' },
        { icon: Settings, label: 'About Gelionyx', action: 'about' },
      ],
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
              <Text style={styles.greeting}>Settings</Text>
              <Text style={styles.title}>Preferences</Text>
            </View>
            <View style={styles.iconContainer}>
              <Settings size={28} color={Colors.black} />
            </View>
          </View>
        </LinearGradient>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionCard}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity
                  key={itemIndex}
                  style={[
                    styles.settingItem,
                    itemIndex < section.items.length - 1 && styles.settingItemBorder,
                  ]}
                  onPress={() => {
                    if (item.action === 'team') navigation.navigate('Team');
                    if (item.action === 'export') navigation.navigate('Export');
                    if (item.action === 'business') navigation.navigate('BusinessMetrics');
                    if (item.action === 'impact') navigation.navigate('Impact');
                    if (item.action === 'tutorial') navigation.navigate('Tutorial');
                    if (item.action) console.log(item.action);
                  }}
                  activeOpacity={0.7}
                >
                  <View style={styles.settingLeft}>
                    <View style={styles.settingIcon}>
                      <item.icon size={20} color={Colors.primary} />
                    </View>
                    <Text style={styles.settingLabel}>{item.label}</Text>
                  </View>
                  {item.toggle !== undefined ? (
                    <Switch
                      value={item.toggle}
                      onValueChange={item.onToggle}
                      trackColor={{ false: Colors.neutral[300], true: Colors.primary }}
                      thumbColor={Colors.white}
                    />
                  ) : (
                    <View style={styles.settingRight}>
                      {item.value && <Text style={styles.settingValue}>{item.value}</Text>}
                      <ArrowRight size={16} color={Colors.textSecondary} />
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
          <LogOut size={20} color={Colors.danger} />
          <Text style={styles.logoutText}>Log Out</Text>
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
    fontSize: 14,
    fontWeight: '800',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingValue: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginHorizontal: 20,
    marginBottom: 32,
    padding: 18,
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.danger,
    ...Colors.shadow.md,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.danger,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

