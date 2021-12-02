import React from "react";
import "./TicketTile.scss";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Counter from "../Counter/Counter";

const TicketTile = (props) => {
  return (
    <div className="ticket-tile">
      <PersonalInfo name={props.name} role={props.role} key={props.id}/>
      <div className="ticket-tile__counter">
        <Counter />
      </div>
    </div>
  );
};



export default TicketTile;