import "./Button.scss";

const Button = ({ isPlus, onClick }) => {
  // isPlus ? true : false;

  if (isPlus === true) {
    return <button className="button-plus" onClick={onClick}>+</button>;
  } else {
    return <button className="button-minus" onClick={onClick}>-</button>;
  }
};

export default Button;
