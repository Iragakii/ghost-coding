
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage/HomePage'
import HorrorCode from './ExploreLayout/HorrorCode'
import DreamCode from './ExploreLayout/DreamCode'

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/horror' element={<HorrorCode></HorrorCode>} />
        <Route path='/dream' element={<DreamCode></DreamCode>} />
      </Routes>
    </>
  )
}

export default App
