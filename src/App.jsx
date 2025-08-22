import { useState } from 'react'

import './App.css'
import Login from './pages/login'
import {Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
       <Route path="/" element={<Login />} />
     
     </Routes>
    </>
  )
}

export default App
