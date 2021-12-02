import team from "../../data/team";





const nameRole = team.map((player) => {
console.log(player);

  return (
    <div key={player.id}>
      <h4>{player.name}</h4>
      <h4>{player.role}</h4>
      <br />
    </div>
  );
});


// const nameRole = team
// .map()
// .filter(team => team.id)
// .sort((a, b) => a.id - b.id)
// .forEach((player) => {
//   console.log(player);

//   return (
//         <div key={player.id}>
//           <h4>{player.name}</h4>
//           <h4>{player.role}</h4>
//           <br />
//         </div>
//       );
//   });


// const name = team.map ((player) => {
//   return <div>
//     <h1>{player.name}</h1>
//   </div>
// })

// const role = team.map ((player) => {
//   const {id} = props
//   return <div>
//     <h1>{player.role}</h1>
//   </div>
// })


// const NameRole = (props) => {
//   const {id} = props;



// }

const PersonalInfo = () => {
  return <div className="ticket-tile__info" >{nameRole}</div>;
};

export default PersonalInfo;
