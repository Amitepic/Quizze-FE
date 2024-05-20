import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/HomePage';
import Auth from './Pages/AuthPage'

function App() {
  

  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
