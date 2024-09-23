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

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route index path='/' element={<>
            <Navbar></Navbar>
            <div className='px-10 lg:px-[10rem] 2xl:px-[25rem]'>
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