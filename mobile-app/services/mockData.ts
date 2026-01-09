import { Field, Deployment, Analytics } from '../types';

export const mockFields: Field[] = [
  {
    id: 'field-a',
    name: 'Field Zone A',
    area: 2.5,
    cropType: 'Maize (Zea mays)',
    location: { lat: 12.345, lng: 45.678 },
    status: 'critical',
    moisture: 12,
    temperature: 28,
    lastUpdate: new Date(),
  },
  {
    id: 'field-b',
    name: 'Field Zone B',
    area: 1.8,
    cropType: 'Wheat (Triticum)',
    location: { lat: 12.350, lng: 45.680 },
    status: 'monitoring',
    moisture: 18,
    temperature: 26,
    lastUpdate: new Date(),
  },
];

export const mockDeployments: Deployment[] = [
  {
    id: 'dep-001',
    fieldId: 'field-a',
    batchId: 'B-04',
    quantity: 125,
    status: 'scheduled',
    scheduledAt: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
  },
];

export const mockAnalytics: Analytics = {
  totalWaterSaved: 40,
  fieldsMonitored: 2,
};




