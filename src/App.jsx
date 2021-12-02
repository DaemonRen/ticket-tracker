import "./App.scss";
import TicketTile from "./components/TicketTile/TicketTile";
import team from "./data/team";


// const Name = team
// .map ((player) => {

// });

// const Role = team
// .map ((player) => {

// })

const App = () => {
  return (
    <div className = "ticket-container" >
      <TicketTile  />
    </div>
  )
}

  export default App;  