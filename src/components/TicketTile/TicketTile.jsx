import React from "react";
import "./TicketTile.scss";
import Button from "../Button/Button"
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Counter from "../Counter/Counter";

const TicketTile = () => {
  return (
    <div className="ticket-tile">
      <PersonalInfo name = "Ben" role = "Amazing Person"/>
      <div className="ticket-tile__counter">
        <Counter />
        <Button  />
        <Button  />
      </div>
    </div>
  );
};

export default TicketTile;