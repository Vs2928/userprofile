import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfilePage from './components/UserProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserProfilePage/>
    </>
  )
}

export default App
