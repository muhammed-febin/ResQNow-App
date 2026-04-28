export interface EmergencyService {
  id: string;
  name: string;
  number: string;
  category: 'medical' | 'fire' | 'police' | 'roadside';
  description: string;
}

const emergencyData: EmergencyService[] = [
  { id: 'erss', name: 'Unified Emergency', number: '112', category: 'police', description: 'Coordinated Police, Fire, Ambulance' },
  { id: 'police', name: 'Police', number: '100', category: 'police', description: 'City Police Control Room' },
  { id: 'fire', name: 'Fire Department', number: '101', category: 'fire', description: 'Fire & Rescue Services' },
  { id: 'ambulance', name: 'Ambulance', number: '108', category: 'medical', description: 'Emergency Medical Services' },
  { id: 'roadside', name: 'Highway Helpline', number: '1033', category: 'roadside', description: 'National Highway Assistance' },
  { id: 'police_local', name: 'Local Police', number: '0824-2424722', category: 'police', description: 'Mangaluru City Police' }
];

export const fetchEmergencyServices = async (): Promise<EmergencyService[]> => {
  // Simulate API fetch
  return new Promise((resolve) => {
    setTimeout(() => resolve(emergencyData), 500);
  });
};
