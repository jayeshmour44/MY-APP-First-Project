import './Styles/App.css'
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar'


function App() {
  const movienumber =2

  return (
    <div>
      <NavBar />
   <main className="main-content">
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/favorites" element = {<Favorites />} />
    </Routes>
   </main>
   </div>
     )
}

export default App
