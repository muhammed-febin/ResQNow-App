import { useEmergency } from '../context/EmergencyContext';
import '../styles/BottomNav.css';

const BottomNav = () => {
  const { currentScreen, setScreen } = useEmergency();

  return (
    <div className="bottom-nav">
      <div 
        className={`nav-item ${currentScreen === 'home' ? 'active' : ''}`}
        onClick={() => setScreen('home')}
      >
        <div className="nav-icon">🏠</div>
        <div className="nav-label">Home</div>
      </div>
      <div 
        className={`nav-item ${currentScreen === 'safety' ? 'active' : ''}`}
        onClick={() => setScreen('safety')}
      >
        <div className="nav-icon">📍</div>
        <div className="nav-label">Track</div>
      </div>
      <div 
        className={`nav-item ${currentScreen === 'settings' ? 'active' : ''}`}
        onClick={() => setScreen('settings')}
      >
        <div className="nav-icon">👤</div>
        <div className="nav-label">Profile</div>
      </div>
    </div>
  );
};

export default BottomNav;
