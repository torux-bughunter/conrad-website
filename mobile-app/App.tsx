import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Droplets, BarChart3, Map, Package, Bell, Cloud, Settings } from 'lucide-react-native';
import { Colors } from './constants/Colors';

// Screens
import DashboardScreen from './screens/DashboardScreen';
import FieldsScreen from './screens/FieldsScreen';
import FieldDetailsScreen from './screens/FieldDetailsScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import WeatherScreen from './screens/WeatherScreen';
import SettingsScreen from './screens/SettingsScreen';
import TeamScreen from './screens/TeamScreen';
import ExportScreen from './screens/ExportScreen';
import FieldZonesScreen from './screens/FieldZonesScreen';
import AdvancedAnalyticsScreen from './screens/AdvancedAnalyticsScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import ImpactScreen from './screens/ImpactScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import TutorialScreen from './screens/TutorialScreen';
import BusinessMetricsScreen from './screens/BusinessMetricsScreen';
import { ErrorBoundary } from './components/ErrorBoundary';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardMain" component={DashboardScreen} />
      <Stack.Screen name="FieldDetails" component={FieldDetailsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Team" component={TeamScreen} />
      <Stack.Screen name="Export" component={ExportScreen} />
      <Stack.Screen name="FieldZones" component={FieldZonesScreen} />
      <Stack.Screen name="AdvancedAnalytics" component={AdvancedAnalyticsScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="Impact" component={ImpactScreen} />
      <Stack.Screen name="BusinessMetrics" component={BusinessMetricsScreen} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
    </Stack.Navigator>
  );
}

function FieldsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FieldsMain" component={FieldsScreen} />
      <Stack.Screen name="FieldDetails" component={FieldDetailsScreen} />
    </Stack.Navigator>
  );
}

function AnalyticsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AnalyticsMain" component={AnalyticsScreen} />
      <Stack.Screen name="AdvancedAnalytics" component={AdvancedAnalyticsScreen} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SettingsMain" component={SettingsScreen} />
      <Stack.Screen name="Tutorial" component={TutorialScreen} />
      <Stack.Screen name="Team" component={TeamScreen} />
      <Stack.Screen name="Export" component={ExportScreen} />
      <Stack.Screen name="BusinessMetrics" component={BusinessMetricsScreen} />
      <Stack.Screen name="Impact" component={ImpactScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  const insets = useSafeAreaInsets();
  
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.textSecondary,
          tabBarStyle: {
            backgroundColor: Colors.white,
            borderTopWidth: 2,
            borderTopColor: Colors.black,
            height: 58 + insets.bottom,
            paddingBottom: Math.max(insets.bottom, 6),
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '700',
            marginBottom: 2,
          },
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            tabBarIcon: ({ color, size }) => <Droplets size={size || 24} color={color} />,
            tabBarLabel: 'Dashboard',
          }}
        />
        <Tab.Screen
          name="Fields"
          component={FieldsStack}
          options={{
            tabBarIcon: ({ color, size }) => <Map size={size || 24} color={color} />,
            tabBarLabel: 'Fields',
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={AnalyticsStack}
          options={{
            tabBarIcon: ({ color, size }) => <BarChart3 size={size || 24} color={color} />,
            tabBarLabel: 'Analytics',
          }}
        />
        <Tab.Screen
          name="Weather"
          component={WeatherScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Cloud size={size || 24} color={color} />,
            tabBarLabel: 'Weather',
          }}
        />
        <Tab.Screen
          name="More"
          component={SettingsStack}
          options={{
            tabBarIcon: ({ color, size }) => <Settings size={size || 24} color={color} />,
            tabBarLabel: 'More',
          }}
        />
      </Tab.Navigator>
  );
}

function RootNavigator() {
  return <TabNavigator />;
}

export default function App() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
