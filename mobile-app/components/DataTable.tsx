import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface Column {
  key: string;
  label: string;
  width?: number;
  align?: 'left' | 'center' | 'right';
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  title?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ columns, data, title }) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.table}>
          {/* Header */}
          <View style={styles.headerRow}>
            {columns.map((column) => (
              <View
                key={column.key}
                style={[
                  styles.headerCell,
                  { width: column.width || 120 },
                  column.align === 'right' && styles.alignRight,
                  column.align === 'center' && styles.alignCenter,
                ]}
              >
                <Text style={styles.headerText}>{column.label}</Text>
              </View>
            ))}
          </View>
          {/* Rows */}
          {data.map((row, rowIndex) => (
            <View
              key={rowIndex}
              style={[
                styles.row,
                rowIndex < data.length - 1 && styles.rowBorder,
              ]}
            >
              {columns.map((column) => (
                <View
                  key={column.key}
                  style={[
                    styles.cell,
                    { width: column.width || 120 },
                    column.align === 'right' && styles.alignRight,
                    column.align === 'center' && styles.alignCenter,
                  ]}
                >
                  <Text style={styles.cellText}>{row[column.key] || '-'}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.black,
    ...Colors.shadow.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.text,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  table: {
    minWidth: '100%',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    borderBottomWidth: 2,
    borderBottomColor: Colors.black,
  },
  headerCell: {
    padding: 12,
    borderRightWidth: 1,
    borderRightColor: Colors.neutral[300],
  },
  headerText: {
    fontSize: 12,
    fontWeight: '900',
    color: Colors.text,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: 'row',
  },
  rowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[200],
  },
  cell: {
    padding: 12,
    borderRightWidth: 1,
    borderRightColor: Colors.neutral[200],
  },
  cellText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
});




