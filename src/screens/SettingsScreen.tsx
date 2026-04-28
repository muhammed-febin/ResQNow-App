import { useEmergency } from '../context/EmergencyContext';
import '../styles/Screens.css';

const SettingsScreen = () => {
  const { setScreen, settings, toggleSetting } = useEmergency();

  return (
    <div className="screen settings-screen">
      <div className="topbar">
        <div className="back-btn" onClick={() => setScreen('home')}>
          <span>←</span> Back
        </div>
        <div className="app-title">Settings</div>
        <div style={{ width: 44 }}></div>
      </div>

      <div className="section-header">
        <h3 className="section-label">Connectivity</h3>
      </div>
      <div className="info-list">
        <div className="info-item" onClick={() => toggleSetting('location')}>
          <div className="info-icon">📍</div>
          <div className="info-body">
            <div className="info-title">Location services</div>
            <div className="info-sub">Always on for emergencies</div>
          </div>
          <div className={`toggle ${settings.location ? 'active' : ''}`}>
            <div className="toggle-thumb"></div>
          </div>
        </div>
        <div className="info-item" onClick={() => toggleSetting('smsFallback')}>
          <div className="info-icon">📵</div>
          <div className="info-body">
            <div className="info-title">Offline SMS fallback</div>
            <div className="info-sub">Send alerts via SMS when no data</div>
          </div>
          <div className={`toggle ${settings.smsFallback ? 'active' : ''}`}>
            <div className="toggle-thumb"></div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="section-header">
        <h3 className="section-label">Privacy & Security</h3>
      </div>
      <div className="info-list">
        <div className="info-item">
          <div className="info-icon">🔐</div>
          <div className="info-body">
            <div className="info-title">End-to-end encryption</div>
            <div className="info-sub">All data protected in transit</div>
          </div>
          <div className="status-badge green-bg">ACTIVE</div>
        </div>
        <div className="info-item">
          <div className="info-icon">🩺</div>
          <div className="info-body">
            <div className="info-title">Medical profile</div>
            <div className="info-sub">Edit blood group, allergies</div>
          </div>
          <div className="arrow-right">›</div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="section-header">
        <h3 className="section-label">Community</h3>
      </div>
      <div className="info-list">
        <div className="info-item" onClick={() => toggleSetting('volunteerMode')}>
          <div className="info-icon">🤝</div>
          <div className="info-body">
            <div className="info-title">Volunteer helper mode</div>
            <div className="info-sub">Accept alerts to help nearby users</div>
          </div>
          <div className={`toggle ${settings.volunteerMode ? 'active' : ''}`}>
            <div className="toggle-thumb"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
