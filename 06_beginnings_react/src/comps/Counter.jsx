import { useState } from "react";

function Counter() {
  const [arr, setArr] = useState([]);

  function addPlus() {
    setArr((prevArr) => [...prevArr, "+"]);
  }

  function addMinus() {
    setArr((prevArr) => [...prevArr, "-"]);
  }

  return (
    <div>
      <p>Array: {arr.join(" ")}</p>
      <button onClick={addPlus}>Add Plus</button>
      <button onClick={addMinus}>Add Minus</button>
    </div>
  );

  //  ------- adding quantity to array -------

  // const [cart, setCart] =useState({
  //   item: "apple",
  //   quantity: 1,
  // });

  // function addApple() {
  //   setCart((prevCart) => ({
  //     ...prevCart,
  //     quantity: prevCart.quantity + 1,
  //   }));
  // }

  // function removeApple() {
  //   setCart((prevCart) => ({
  //     ...prevCart,
  //     quantity: prevCart.quantity - 1,
  //   }));
  // }

  // return (
  //   <div>
  //     <p>Item: {cart.item}</p>
  //     <p>Quantity: {cart.quantity}</p>
  //     <button onClick={addApple}>Add Apple</button>
  //     <button onClick={removeApple}>Remove Apple</button>
  //   </div>
  // );

  //  ------- Counting numbers -------

  // const [count, setCount] = useState(0);

  // function CountPlus() {
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  // }
  // function CountMinus() {
  //   setCount((prevCount) => prevCount - 1);
  // }

  // return (
  //   <div>
  //     <p> Counting numbers: {count}</p>
  //     <button onClick={CountPlus}>Plus 1</button>
  //     <button onClick={CountMinus}>Minus 1</button>
  //   </div>
  // )
}

export default Counter;
