import { useEmergency } from '../context/EmergencyContext';
import '../styles/Screens.css';

const MedicalScreen = () => {
  const { setScreen, profile, services, loading } = useEmergency();
  
  const ambulance = services.find(s => s.id === 'ambulance');

  const handleCall = () => {
    if (ambulance) {
      window.location.href = `tel:${ambulance.number}`;
    }
  };

  return (
    <div className="screen medical-screen">
      <div className="topbar">
        <div className="back-btn" onClick={() => setScreen('home')}>
          <span>←</span> Back
        </div>
        <div className="app-title">Medical</div>
        <div style={{ width: 44 }}></div>
      </div>

      <div className="module-hero red">
        <div className="module-hero-icon">🚑</div>
        <div className="module-hero-body">
          <div className="module-hero-title">Medical Emergency</div>
          <div className="module-hero-sub">One-tap ambulance dispatch</div>
        </div>
      </div>

      <button 
        className="primary-action red" 
        onClick={handleCall}
        disabled={loading}
      >
        📞 Call Ambulance · {ambulance?.number || '108'}
      </button>

      <div className="section-header">
        <h3 className="section-label">Your medical profile</h3>
      </div>
      <div className="profile-scroll">
        <div className="profile-chip">
          <div className="chip-label">Blood Group</div>
          <div className="chip-value red-text">{profile.bloodGroup}</div>
        </div>
        <div className="profile-chip">
          <div className="chip-label">Allergies</div>
          <div className="chip-value">{profile.allergies}</div>
        </div>
        <div className="profile-chip">
          <div className="chip-label">Conditions</div>
          <div className="chip-value">{profile.conditions}</div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="section-header">
        <h3 className="section-label">Nearby hospitals</h3>
      </div>
      <div className="map-placeholder">
        <div className="map-grid"></div>
        <div className="map-pin you" style={{ top: '50%', left: '50%' }}>📍</div>
        <div className="map-pin hosp" style={{ top: '30%', left: '40%' }}>🏥</div>
        <div className="map-pin hosp" style={{ top: '65%', left: '70%' }}>🏥</div>
      </div>

      <div className="info-list">
        <div className="info-item">
          <div className="info-icon">🏥</div>
          <div className="info-body">
            <div className="info-title">KMC Hospital</div>
            <div className="info-sub">1.2 km · Attavar, Mangaluru</div>
          </div>
          <div className="status-badge">OPEN</div>
        </div>
        <div className="info-item">
          <div className="info-icon">🏥</div>
          <div className="info-body">
            <div className="info-title">Wenlock District Hospital</div>
            <div className="info-sub">2.1 km · Govt · 24/7</div>
          </div>
          <div className="status-badge">OPEN</div>
        </div>
      </div>
    </div>
  );
};

export default MedicalScreen;
