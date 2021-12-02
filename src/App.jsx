import "./App.scss";
import TicketTile from "./components/TicketTile/TicketTile";
import team from "./data/team";


const App = () => {
  const ticketTrackList = team.map((player) => {
    return (<TicketTile name={player.name} role={player.role} key={player.id} />);
  });

  return <div className="ticket-container">{ticketTrackList}</div>;
};

export default App;