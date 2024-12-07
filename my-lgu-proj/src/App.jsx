import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from'./pages/Home.jsx';
import PPE_Entry from './pages/PPE_Entry.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PPE_Entry/>
    </>
  )
}

export default App
