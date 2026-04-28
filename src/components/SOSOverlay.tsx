import { useEmergency } from '../context/EmergencyContext';
import '../styles/SOSOverlay.css';

const SOSOverlay = () => {
  const { sosType, sosCountdown, sosStatus, cancelSOS } = useEmergency();

  return (
    <div className="sos-overlay show">
      <div className="sos-overlay-content">
        <h2 className="sos-overlay-title">SOS ALERT</h2>
        <div className="sos-counter">
          {sosCountdown > 0 ? sosCountdown : '✓'}
        </div>
        <div className="sos-overlay-sub">
          <strong style={{ color: '#fff' }}>{sosType}</strong>
          <br />
          Sending location & alert now
        </div>
        <div className="sos-sending">
          <div className="pulse-dot"></div>
          <span>{sosStatus}</span>
        </div>
        {sosCountdown > 0 && (
          <button className="sos-cancel" onClick={cancelSOS}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default SOSOverlay;
