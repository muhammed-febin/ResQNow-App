import { useEmergency } from '../context/EmergencyContext';
import '../styles/Screens.css';

const SafetyScreen = () => {
  const { setScreen, triggerSOS, services, loading } = useEmergency();
  
  const police = services.find(s => s.id === 'police');

  const handleCall = () => {
    if (police) {
      window.location.href = `tel:${police.number}`;
    }
  };

  const handleShareLocation = () => {
    const uniqueId = Math.random().toString(36).substring(2, 10).toUpperCase();
    const shareLink = `https://resqnow.live/track/${uniqueId}`;
    
    // Copy to clipboard simulation
    navigator.clipboard.writeText(shareLink).then(() => {
      alert(`Live tracking link generated and copied to clipboard!\n\nLink: ${shareLink}\n\nThis link will allow trusted contacts to track your location for the next 2 hours.`);
    }).catch(() => {
      alert(`Live tracking link generated!\n\nLink: ${shareLink}`);
    });
  };

  return (
    <div className="screen safety-screen">
      <div className="topbar">
        <div className="back-btn" onClick={() => setScreen('home')}>
          <span>←</span> Back
        </div>
        <div className="app-title">Safety</div>
        <div style={{ width: 44 }}></div>
      </div>

      <div className="module-hero blue">
        <div className="module-hero-icon">🚓</div>
        <div className="module-hero-body">
          <div className="module-hero-title">Safety & Security</div>
          <div className="module-hero-sub">Police · Silent SOS · Tracking</div>
        </div>
      </div>

      <button 
        className="primary-action blue" 
        onClick={handleCall}
        disabled={loading}
      >
        📞 Alert Police · {police?.number || '100'}
      </button>

      <div className="silent-mode-card premium-card" onClick={() => triggerSOS('Silent SOS Activated')}>
        <div className="silent-icon">🔇</div>
        <div className="silent-body">
          <div className="silent-title">Silent SOS mode</div>
          <div className="silent-sub">No visual indicator — sends alert discreetly</div>
        </div>
        <div className="status-badge red-bg">ACTIVATE</div>
      </div>

      <div className="section-header">
        <h3 className="section-label">Live tracking</h3>
      </div>
      <div className="info-list">
        <div className="info-item" onClick={handleShareLocation}>
          <div className="info-icon">📍</div>
          <div className="info-body">
            <div className="info-title">Share live location</div>
            <div className="info-sub">Send secure link to trusted contacts</div>
          </div>
          <div className="status-badge blue-bg">SHARE</div>
        </div>
        <div className="info-item" onClick={() => alert('Audio recording started...')}>
          <div className="info-icon">🎙</div>
          <div className="info-body">
            <div className="info-title">Auto audio recording</div>
            <div className="info-sub">Evidence stored securely, E2E encrypted</div>
          </div>
          <div className="status-badge amber-bg">READY</div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="section-header">
        <h3 className="section-label">Trusted contacts</h3>
      </div>
      <div className="contacts-row">
        <div className="contact-item">
          <div className="contact-avatar green">MM</div>
          <div className="contact-name">Mom</div>
        </div>
        <div className="contact-item">
          <div className="contact-avatar green">RK</div>
          <div className="contact-name">Ravi</div>
        </div>
        <div className="contact-item">
          <div className="contact-avatar add">+</div>
          <div className="contact-name">Add</div>
        </div>
      </div>
    </div>
  );
};

export default SafetyScreen;
