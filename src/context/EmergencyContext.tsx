import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { fetchEmergencyServices, type EmergencyService } from '../services/api';

type Screen = 'home' | 'medical' | 'fire' | 'fuel' | 'safety' | 'settings';

interface UserProfile {
  bloodGroup: string;
  allergies: string;
  conditions: string;
  insurance: string;
}

interface EmergencyContextType {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
  sosActive: boolean;
  sosType: string;
  triggerSOS: (type: string) => void;
  cancelSOS: () => void;
  sosStatus: string;
  sosCountdown: number;
  profile: UserProfile;
  settings: {
    location: boolean;
    smsFallback: boolean;
    notifications: boolean;
    volunteerMode: boolean;
  };
  toggleSetting: (key: 'location' | 'smsFallback' | 'notifications' | 'volunteerMode') => void;
  services: EmergencyService[];
  loading: boolean;
}

const EmergencyContext = createContext<EmergencyContextType | undefined>(undefined);

export const EmergencyProvider = ({ children }: { children: ReactNode }) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [sosActive, setSosActive] = useState(false);
  const [sosType, setSosType] = useState('Emergency SOS');
  const [sosStatus, setSosStatus] = useState('Locating GPS signal...');
  const [sosCountdown, setSosCountdown] = useState(3);
  const [timer, setTimer] = useState<number | null>(null);
  const [services, setServices] = useState<EmergencyService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmergencyServices().then(data => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  const [profile] = useState<UserProfile>({
    bloodGroup: 'O+',
    allergies: 'Penicillin',
    conditions: 'None',
    insurance: 'PMJAY'
  });

  const [settings, setSettings] = useState({
    location: true,
    smsFallback: true,
    notifications: true,
    volunteerMode: false
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const setScreen = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const triggerSOS = (type: string) => {
    setSosType(type);
    setSosActive(true);
    setSosCountdown(3);
    setSosStatus('Locating GPS signal...');

    if (timer) clearInterval(timer);

    const newTimer = window.setInterval(() => {
      setSosCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(newTimer);
          setSosStatus('Alert sent! Help is on the way.');
          setTimeout(() => setSosActive(false), 2500);
          return 0;
        }
        if (prev === 2) setSosStatus('Sending SMS alert...');
        if (prev === 1) setSosStatus('Notifying emergency services...');
        return prev - 1;
      });
    }, 1000);

    setTimer(newTimer);
  };

  const cancelSOS = () => {
    if (timer) clearInterval(timer);
    setSosActive(false);
  };

  return (
    <EmergencyContext.Provider
      value={{
        currentScreen,
        setScreen,
        sosActive,
        sosType,
        triggerSOS,
        cancelSOS,
        sosStatus,
        sosCountdown,
        profile,
        settings,
        toggleSetting,
        services,
        loading
      }}
    >
      {children}
    </EmergencyContext.Provider>
  );
};

export const useEmergency = () => {
  const context = useContext(EmergencyContext);
  if (!context) {
    throw new Error('useEmergency must be used within an EmergencyProvider');
  }
  return context;
};
