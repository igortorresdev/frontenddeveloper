import "./App.css";
import Nav from "./comps/Nav.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Users from "./pages/Users.jsx";

// import Todo from "./comps/Todo";
// import Title from "./comps/Title";
// import Modal from "./comps/Modal";
// import Counter from "./comps/Counter";
// import "./comps/Todo.css";
// import "./comps/Modal.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

// import { useState } from "react";


//cd "D:\Documents\FED Projects\frontenddeveloper\06_beginnings_react"
//npm run dev

function App() {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:username" element={<Users />} />
      </Routes>
    </Router>
  );
}
export default App;




// const [showModal, setShowModal] = useState(false);

// const [state, setState] = useState(initialValue);
// state is the current value of the state variable.
// setState is a function that updates the value of the state variable.

  // function onTodoDelete() {
  //   setShowModal(true);
  //   console.log('onTodoDelete()');
  // }

  // return (
  //   <div>
  //     <Title />

  //     <div>
  //       input:{" "}
  //       <input
  //         type="text"
  //         onChange={(event) => console.log(event.target.value)}
  //       />
  //       <button onClick={() => setShowModal(true)}>Add Todo</button>
  //     </div>

  //     <div className="todo__wrapper">
  //       <Todo name="Let's do this" secondname="Do what?" />
  //       <Todo name="Get the project done" secondname="But how?" />
  //       <Todo name="Stick to the process" secondname="Right on!" />
  //     </div>
  //     <Counter />

  //     {/* {showModal ? <Modal question="Is this real life?" /> : null} */}
  //     {showModal && (
  //       <Modal
  //         question="Is this real life?"
  //         onCancel={() => setShowModal(false)}
  //         onConfirm={() => setShowModal(false)}
  //       />
  //     )}
  //   </div>
  // );