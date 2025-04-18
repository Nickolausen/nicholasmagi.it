import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import InitialScreen from './pages/InitialScreen'
import Education from './pages/Education'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import DefaultLayout from './components/LayoutComponents/DefaultLayout'
import SchoolDashboard from './pages/SchoolDashboard'

function App() {
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
        <Route path='school'>
          <Route index element={<DefaultLayout children={<SchoolDashboard/>}/>}/>
          <Route path='react-for-dummies' element="Ciaoo"/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App