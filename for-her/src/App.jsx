import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Milestones from './pages/Milestones';
import Photos from './pages/Photos';
import Notes from './pages/Notes';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <Router>
      <BackgroundMusic />
      <Routes>
        {/* This tells React: "When the link is just '/', show the Login page" */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/notes" element={<Notes />} />
        
        {/* We will add the Home page route here in the next step! */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;