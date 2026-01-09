import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Map } from 'lucide-react-native';
import { FieldCard } from '../components/FieldCard';
import { Colors } from '../constants/Colors';
import { mockFields } from '../services/mockData';
import { Field } from '../types';

export default function FieldsScreen({ navigation }: any) {
  const [fields] = useState<Field[]>(mockFields);

  const handleFieldPress = (field: Field) => {
    navigation.navigate('FieldDetails', { field });
  };

  const handleFieldLongPress = (field: Field) => {
    navigation.navigate('FieldZones', { fieldId: field.id });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.title}>Fields</Text>
        <TouchableOpacity style={styles.mapButton}>
          <Map size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={fields}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FieldCard
            field={item}
            onPress={() => handleFieldPress(item)}
            onLongPress={() => handleFieldLongPress(item)}
          />
        )}
        contentContainerStyle={[styles.list, { paddingBottom: 100 }]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  mapButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.black,
  },
  list: {
    padding: 20,
    paddingTop: 8,
  },
});

