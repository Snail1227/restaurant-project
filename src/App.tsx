import { Toaster } from "react-hot-toast";
import './css/App.css';
import './css/base.css';
import "./css/header.css";
import "./css/reserve.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { HeaderControl } from './Components/controlHeaders';
import { Reserve } from './Components/Reserve';
import { Contact } from "./Components/Contact";
import { OurStory } from "./Components/OurStory";
import { Location } from "./Components/Location";

function App() {
  return (
    <Router>
      <Toaster />
      <HeaderControl />
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourStory" element={<OurStory />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
