import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Users, UserPlus, Mail, Shield, Crown, MoreVertical } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'member';
  avatar?: string;
  fields: number;
  lastActive: Date;
}

export default function TeamScreen() {
  const [members] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john@gelionyx.com',
      role: 'owner',
      fields: 5,
      lastActive: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@gelionyx.com',
      role: 'admin',
      fields: 3,
      lastActive: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: '3',
      name: 'Mike Chen',
      email: 'mike@gelionyx.com',
      role: 'member',
      fields: 2,
      lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
  ]);

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'owner':
        return <Crown size={16} color={Colors.warning} />;
      case 'admin':
        return <Shield size={16} color={Colors.primary} />;
      default:
        return null;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'owner':
        return Colors.warning;
      case 'admin':
        return Colors.primary;
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
              <Text style={styles.greeting}>Team Management</Text>
              <Text style={styles.title}>{members.length} Members</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <UserPlus size={28} color={Colors.black} />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Invite Section */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Mail size={24} color={Colors.primary} />
            <Text style={styles.cardTitle}>Invite Team Member</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            placeholderTextColor={Colors.textSecondary}
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.inviteButtonText}>Send Invitation</Text>
          </TouchableOpacity>
        </View>

        {/* Team Members List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Team Members</Text>
          {members.map((member) => (
            <View key={member.id} style={styles.memberCard}>
              <View style={styles.memberAvatar}>
                <Text style={styles.memberInitials}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </Text>
              </View>
              <View style={styles.memberInfo}>
                <View style={styles.memberHeader}>
                  <Text style={styles.memberName}>{member.name}</Text>
                  {getRoleIcon(member.role)}
                </View>
                <Text style={styles.memberEmail}>{member.email}</Text>
                <View style={styles.memberStats}>
                  <Text style={styles.memberStat}>{member.fields} Fields</Text>
                  <Text style={styles.memberStat}>•</Text>
                  <Text style={[styles.memberRole, { color: getRoleColor(member.role) }]}>
                    {member.role.toUpperCase()}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.memberMenu}>
                <MoreVertical size={20} color={Colors.textSecondary} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Team Statistics */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Users size={24} color={Colors.secondary} />
            <Text style={styles.cardTitle}>Team Statistics</Text>
          </View>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{members.length}</Text>
              <Text style={styles.statLabel}>Total Members</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                {members.reduce((sum, m) => sum + m.fields, 0)}
              </Text>
              <Text style={styles.statLabel}>Fields Managed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                {members.filter(m => m.role === 'admin' || m.role === 'owner').length}
              </Text>
              <Text style={styles.statLabel}>Admins</Text>
            </View>
          </View>
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
  input: {
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
    backgroundColor: Colors.background,
  },
  inviteButton: {
    backgroundColor: Colors.primary,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  inviteButtonText: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.black,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
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
  memberCard: {
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
  memberAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
  },
  memberInitials: {
    fontSize: 20,
    fontWeight: '900',
    color: Colors.black,
  },
  memberInfo: {
    flex: 1,
    gap: 4,
  },
  memberHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.text,
  },
  memberEmail: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  memberStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  memberStat: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
  },
  memberRole: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  memberMenu: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statItem: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.neutral[200],
  },
  statValue: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});




