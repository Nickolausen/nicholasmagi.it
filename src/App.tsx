import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import InitialScreen from './pages/InitialScreen'
import Education from './pages/Education'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'

function App() {
  
  localStorage.setItem("theme", "light")
  alert("Qui!!")
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<>
            <Navbar></Navbar>
            <div className='px-10 xl:px-[10rem]'>
              <InitialScreen></InitialScreen>
              <Education></Education>
              <Projects></Projects>
              <ContactMe></ContactMe>
            </div>
            <Footer></Footer>
        </>}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App