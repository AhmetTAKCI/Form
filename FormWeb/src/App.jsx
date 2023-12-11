import { useState } from 'react'
import './App.css'
import Form from "./components/Form";
import Compare from "./components/Compare";

function App() {
  const [count, setCount] = useState(0);

  return (
   <div>
    <Form/>
    <Compare/>
   </div>
  )
}

export default App
