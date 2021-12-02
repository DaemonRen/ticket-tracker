


// const Button = () => {
//     return (
//         <button>Hello</button>
//     );
// };

const Button = ({isPlus, onClick}) => {
    if(isPlus === true) {
      return <button onClick={onClick}>+</button>
    } else {
      return <button onClick={onClick}>-</button>
    }
  }

export default Button;