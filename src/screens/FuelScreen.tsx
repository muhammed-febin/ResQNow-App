import { useEmergency } from '../context/EmergencyContext';
import '../styles/Screens.css';

const FuelScreen = () => {
  const { setScreen, triggerSOS, services, loading } = useEmergency();
  
  const highway = services.find(s => s.id === 'roadside');

  const handleCall = () => {
    if (highway) {
      window.location.href = `tel:${highway.number}`;
    }
  };

  return (
    <div className="screen fuel-screen">
      <div className="topbar">
        <div className="back-btn" onClick={() => setScreen('home')}>
          <span>←</span> Back
        </div>
        <div className="app-title">Roadside</div>
        <div style={{ width: 44 }}></div>
      </div>

      <div className="module-hero green">
        <div className="module-hero-icon">⛽</div>
        <div className="module-hero-body">
          <div className="module-hero-title">Roadside Help</div>
          <div className="module-hero-sub">Fuel · Tow · Mechanic</div>
        </div>
      </div>

      <div className="section-header">
        <h3 className="section-label">What do you need?</h3>
      </div>
      <div className="fuel-options-grid">
        <div className="fuel-opt premium-card" onClick={() => triggerSOS('Fuel Emergency')}>
          <div className="fuel-opt-icon">⛽</div>
          <div className="fuel-opt-label">Fuel</div>
        </div>
        <div className="fuel-opt premium-card" onClick={() => triggerSOS('Tow Truck Requested')}>
          <div className="fuel-opt-icon">🚛</div>
          <div className="fuel-opt-label">Tow Truck</div>
        </div>
        <div className="fuel-opt premium-card" onClick={() => triggerSOS('Mechanic Requested')}>
          <div className="fuel-opt-icon">🔧</div>
          <div className="fuel-opt-label">Mechanic</div>
        </div>
      </div>

      <button 
        className="primary-action green" 
        style={{ marginTop: 24 }} 
        onClick={handleCall}
        disabled={loading}
      >
        🆘 Highway Help · {highway?.number || '1033'}
      </button>

      <div className="divider"></div>

      <div className="section-header">
        <h3 className="section-label">Nearby services</h3>
      </div>
      <div className="map-placeholder">
        <div className="map-grid"></div>
        <div className="map-pin you" style={{ top: '50%', left: '50%' }}>📍</div>
        <div className="map-pin pump" style={{ top: '35%', left: '25%' }}>⛽</div>
        <div className="map-pin garage" style={{ top: '65%', left: '70%' }}>🔧</div>
      </div>
      <div className="info-list">
        <div className="info-item">
          <div className="info-icon">⛽</div>
          <div className="info-body">
            <div className="info-title">HP Petrol Pump</div>
            <div className="info-sub">0.5 km · Open 24/7</div>
          </div>
          <div className="status-badge">OPEN</div>
        </div>
      </div>
    </div>
  );
};

export default FuelScreen;
