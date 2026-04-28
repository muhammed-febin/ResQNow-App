import { EmergencyProvider, useEmergency } from './context/EmergencyContext';
import HomeScreen from './screens/HomeScreen';
import MedicalScreen from './screens/MedicalScreen';
import FireScreen from './screens/FireScreen';
import FuelScreen from './screens/FuelScreen';
import SafetyScreen from './screens/SafetyScreen';
import SettingsScreen from './screens/SettingsScreen';
import SOSOverlay from './components/SOSOverlay';
import BottomNav from './components/BottomNav';

const AppContent = () => {
  const { currentScreen, sosActive } = useEmergency();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen />;
      case 'medical': return <MedicalScreen />;
      case 'fire': return <FireScreen />;
      case 'fuel': return <FuelScreen />;
      case 'safety': return <SafetyScreen />;
      case 'settings': return <SettingsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
      {sosActive && <SOSOverlay />}
      {currentScreen === 'home' || currentScreen === 'safety' || currentScreen === 'settings' ? <BottomNav /> : null}
    </div>
  );
};

function App() {
  return (
    <EmergencyProvider>
      <AppContent />
    </EmergencyProvider>
  );
}

export default App;
