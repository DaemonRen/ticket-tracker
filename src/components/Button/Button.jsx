const Button = ({ isPlus, onClick }) => {
  // isPlus ? true : false;

  if (isPlus === true) {
    return <button onClick={onClick}>+</button>;
  } else {
    return <button onClick={onClick}>-</button>;
  }
};

export default Button;
