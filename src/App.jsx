import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FaBeer} from "react-icons/fa";
import Products from "./components/products/Products.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div >
       <Products />
   </div>
  )
}

export default App
