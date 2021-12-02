import "./PersonalInfo.scss"

const PersonalInfo = (props) => {
  return (
    <div className="ticket-tile__personal">
      <div className="ticket-tile__personal-info">
        <h4>{props.name}</h4>
        <h4>{props.role}</h4>
      </div>
    </div>
  );
};

export default PersonalInfo;
