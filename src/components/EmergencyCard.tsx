import '../styles/EmergencyCard.css';

interface EmergencyCardProps {
  icon: string;
  title: string;
  sub: string;
  color: 'red' | 'amber' | 'green' | 'blue';
  onClick: () => void;
}

const EmergencyCard = ({ icon, title, sub, color, onClick }: EmergencyCardProps) => {
  return (
    <div className="ecard premium-card" onClick={onClick}>
      <div className={`ecard-icon ${color}`}>{icon}</div>
      <div className="ecard-body">
        <div className="ecard-name">{title}</div>
        <div className="ecard-sub">{sub}</div>
      </div>
      <div className="ecard-arrow">›</div>
    </div>
  );
};

export default EmergencyCard;
