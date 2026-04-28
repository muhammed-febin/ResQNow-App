import { useEmergency } from '../context/EmergencyContext';
import '../styles/Screens.css';

const FireScreen = () => {
  const { setScreen, services, loading } = useEmergency();
  
  const fire = services.find(s => s.id === 'fire');

  const handleCall = () => {
    if (fire) {
      window.location.href = `tel:${fire.number}`;
    }
  };

  return (
    <div className="screen fire-screen">
      <div className="topbar">
        <div className="back-btn" onClick={() => setScreen('home')}>
          <span>←</span> Back
        </div>
        <div className="app-title">Fire</div>
        <div style={{ width: 44 }}></div>
      </div>

      <div className="module-hero amber">
        <div className="module-hero-icon">🔥</div>
        <div className="module-hero-body">
          <div className="module-hero-title">Fire Emergency</div>
          <div className="module-hero-sub">Alert · Dispatch · Broadcast</div>
        </div>
      </div>

      <button 
        className="primary-action amber" 
        onClick={handleCall}
        disabled={loading}
      >
        📞 Call Fire Station · {fire?.number || '101'}
      </button>

      <div className="section-header">
        <h3 className="section-label">Broadcast alert</h3>
      </div>
      <div className="info-list">
        <div className="info-item" onClick={() => alert('Broadcast sent!')}>
          <div className="info-icon">📢</div>
          <div className="info-body">
            <div className="info-title">Broadcast to nearby users</div>
            <div className="info-sub">23 people within 500m radius</div>
          </div>
          <div className="status-badge">TAP</div>
        </div>
        <div className="info-item">
          <div className="info-icon">📷</div>
          <div className="info-body">
            <div className="info-title">Upload incident photo</div>
            <div className="info-sub">Attached to emergency report</div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="section-header">
        <h3 className="section-label">Nearby fire stations</h3>
      </div>
      <div className="map-placeholder">
        <div className="map-grid"></div>
        <div className="map-pin you" style={{ top: '50%', left: '50%' }}>📍</div>
        <div className="map-pin fire" style={{ top: '35%', left: '25%' }}>🚒</div>
      </div>
      <div className="info-list">
        <div className="info-item">
          <div className="info-icon">🚒</div>
          <div className="info-body">
            <div className="info-title">Mangaluru Fire Station</div>
            <div className="info-sub">0.8 km · 24/7 Active</div>
          </div>
          <div className="status-badge">3 MIN ETA</div>
        </div>
      </div>
    </div>
  );
};

export default FireScreen;
