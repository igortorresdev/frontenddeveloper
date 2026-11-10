import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// import reportWebVitals from './reportWebVitals'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

createRoot(document.getElementById("root")).render(

    <App />

)

// reportWebVitals()
