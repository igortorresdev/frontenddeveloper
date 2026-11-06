import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './App.jsx'
// import reportWebVitals from './reportWebVitals'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

ReactDom.render(

    <App />,

  document.getElementById('root')
)

// reportWebVitals()
