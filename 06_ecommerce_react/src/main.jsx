import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// import reportWebVitals from './reportWebVitals'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCartShopping, faX } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faCartShopping, faX)

createRoot(document.getElementById("root")).render(

    <App />

)

// reportWebVitals()
