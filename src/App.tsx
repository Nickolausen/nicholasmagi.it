import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import InitialScreen from './pages/InitialScreen'
import Education from './pages/Education'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import DefaultLayout from './components/LayoutComponents/DefaultLayout'

function App() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem("theme", "dark")
  } else {
    localStorage.setItem("theme", "light")
  }
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route index path='/' element={
          <DefaultLayout>
              <InitialScreen/>
              <Education/>
              <Projects/>
              <ContactMe/>
          </DefaultLayout>
        }>
        </Route>
      </Routes>
    </Router>
  )
}

export default App