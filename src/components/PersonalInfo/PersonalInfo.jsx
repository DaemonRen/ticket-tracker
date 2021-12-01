


const PersonalInfo = (props) => {
    return (
        <div className="ticket-tile__info">
        <h4>{props.name}</h4>
        <h4>{props.role}</h4>
      </div>
    );
};

export default PersonalInfo;