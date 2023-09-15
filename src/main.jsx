import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './Info.jsx'
import App from './App.jsx'
import './index.css'

export default function Main(){
  return (
<BrowserRouter>
    <Routes>

      <Route path="/" element = {<App />}  />

      <Route path="/movies/:id" element={<Info/>} />



    </Routes>
    </BrowserRouter>
   
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
