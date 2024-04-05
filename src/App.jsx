import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import LoginPage from './views/LoginPage'
import WelcomePage from './views/WelcomePage'
import { useCookies } from 'react-cookie'

function App() {
  const [cookies, setCookie] = useCookies(['user']);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {cookies.user && <Route path="/home" element={<WelcomePage />} />}
        
      </Routes>
    </Router>
  )
}

export default App
