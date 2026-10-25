function Todo({ name, secondname }) {
  function handleClick(id) {
    console.log('Button clicked!');
    console.log(handleClick, name);
  }
  function handleSecondClick() {
    console.log('Second button clicked!');
  }

  return (
    <div className="todo">
      <p>{name}</p>
      <p>{secondname}</p>
      <button onClick={() => handleClick(1)}>Click Me</button>
    </div>
  )
}

export default Todo