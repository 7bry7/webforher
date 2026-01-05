import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* This tells React: "When the link is just '/', show the Login page" */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        
        {/* We will add the Home page route here in the next step! */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;