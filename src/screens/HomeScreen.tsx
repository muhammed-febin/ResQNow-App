import { useEmergency } from '../context/EmergencyContext';
import SOSButton from '../components/SOSButton';
import EmergencyCard from '../components/EmergencyCard';
import '../styles/Screens.css';

const HomeScreen = () => {
  const { setScreen } = useEmergency();

  return (
    <div className="screen home-screen">
      <div className="topbar">
        <div className="user-greeting">
          <div className="greeting-text">Good evening</div>
          <div className="app-title">ResQNow</div>
        </div>
        <div className="settings-btn" onClick={() => setScreen('settings')}>
          <span className="icon">⚙</span>
        </div>
      </div>

      <div className="status-bar glass">
        <div className="status-dot"></div>
        <div className="status-info">
          <div className="status-text">Location active · Mangaluru, KA</div>
          <div className="status-badge">LIVE</div>
        </div>
      </div>

      <SOSButton />

      <div className="section-header">
        <h3 className="section-label">Emergency services</h3>
      </div>

      <div className="cards-grid">
        <EmergencyCard 
          icon="🚑" 
          title="Medical" 
          sub="Ambulance · Clinic" 
          color="red" 
          onClick={() => setScreen('medical')} 
        />
        <EmergencyCard 
          icon="🔥" 
          title="Fire" 
          sub="Rescue · Alert" 
          color="amber" 
          onClick={() => setScreen('fire')} 
        />
        <EmergencyCard 
          icon="⛽" 
          title="Roadside" 
          sub="Fuel · Tow · Mech" 
          color="green" 
          onClick={() => setScreen('fuel')} 
        />
        <EmergencyCard 
          icon="🚓" 
          title="Safety" 
          sub="Police · Silent" 
          color="blue" 
          onClick={() => setScreen('safety')} 
        />
      </div>

      <div className="divider"></div>

      <div className="section-header">
        <h3 className="section-label">Quick contacts</h3>
      </div>
      
      <div className="contacts-row">
        <div className="contact-item">
          <div className="contact-avatar red">108</div>
          <div className="contact-name">Ambulance</div>
        </div>
        <div className="contact-item">
          <div className="contact-avatar amber">101</div>
          <div className="contact-name">Fire</div>
        </div>
        <div className="contact-item">
          <div className="contact-avatar blue">100</div>
          <div className="contact-name">Police</div>
        </div>
        <div className="contact-item">
          <div className="contact-avatar green">MM</div>
          <div className="contact-name">Mom</div>
        </div>
        <div className="contact-item">
          <div className="contact-avatar add">+</div>
          <div className="contact-name">Add</div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
