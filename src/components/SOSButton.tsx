import { useState, useRef } from 'react';
import { useEmergency } from '../context/EmergencyContext';
import '../styles/SOSButton.css';

const SOSButton = () => {
  const { triggerSOS, contacts, addContact } = useEmergency();
  const [isHolding, setIsHolding] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const holdTimer = useRef<number | null>(null);

  const startHold = () => {
    setIsHolding(true);
    holdTimer.current = window.setTimeout(() => {
      setIsHolding(false);
      setShowOptions(true);
    }, 2000);
  };

  const endHold = () => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
    }
    setIsHolding(false);
  };

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
    setShowOptions(false);
  };

  const handleAdd = () => {
    const name = prompt('Enter contact name:');
    const number = prompt('Enter contact number:');
    if (name && number) {
      addContact(name, number);
    }
    setShowOptions(false);
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
        onClick={() => !isHolding && !showOptions && triggerSOS('Emergency SOS')}
      >
        <div className="sos-btn">
          <div className="sos-label">SOS</div>
          <div className="sos-sub">TAP FOR HELP</div>
        </div>
        {isHolding && <div className="hold-progress"></div>}
      </div>
      <div className="sos-hint">Hold 2s for emergency contacts</div>

      {showOptions && (
        <div className="sos-options-overlay" onClick={() => setShowOptions(false)}>
          <div className="sos-options-card glass" onClick={e => e.stopPropagation()}>
            <h4 className="options-title">Emergency Options</h4>
            <div className="options-list">
              <button className="option-btn add" onClick={handleAdd}>
                👤 Add Emergency Contact
              </button>
              {contacts.map(contact => (
                <button key={contact.id} className="option-btn call" onClick={() => handleCall(contact.number)}>
                  📞 Call {contact.name}
                </button>
              ))}
              <button className="option-btn silent" onClick={() => { triggerSOS('Silent SOS Activated'); setShowOptions(false); }}>
                🔇 Activate Silent SOS
              </button>
            </div>
            <button className="options-close" onClick={() => setShowOptions(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SOSButton;
