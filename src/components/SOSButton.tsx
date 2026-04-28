import { useState, useRef } from 'react';
import { useEmergency } from '../context/EmergencyContext';
import '../styles/SOSButton.css';

const SOSButton = () => {
  const { triggerSOS } = useEmergency();
  const [isHolding, setIsHolding] = useState(false);
  const holdTimer = useRef<number | null>(null);

  const startHold = () => {
    setIsHolding(true);
    holdTimer.current = window.setTimeout(() => {
      triggerSOS('Silent SOS Activated');
      setIsHolding(false);
    }, 2000);
  };

  const endHold = () => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
    }
    setIsHolding(false);
  };

  return (
    <div className="sos-center">
      <div 
        className={`sos-ring ${isHolding ? 'holding' : ''}`}
        onTouchStart={startHold}
        onMouseDown={startHold}
        onTouchEnd={endHold}
        onMouseUp={endHold}
        onMouseLeave={endHold}
        onClick={() => !isHolding && triggerSOS('Emergency SOS')}
      >
        <div className="sos-btn">
          <div className="sos-label">SOS</div>
          <div className="sos-sub">TAP FOR HELP</div>
        </div>
        {isHolding && <div className="hold-progress"></div>}
      </div>
      <div className="sos-hint">Hold 2s for silent mode</div>
    </div>
  );
};

export default SOSButton;
