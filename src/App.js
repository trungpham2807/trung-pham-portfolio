
import {BrowserRouter as Router,
Routes,
Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutMe from "./pages/AboutMe"
import MyCV from "./pages/MyCV"
import Projects from "./pages/Projects"
import TrungAcademy from "./pages/projects/TrungAcademy"

import Slider from "./Components/Slider"
import Footer from "./Components/Footer"

function App() {
  return (
    
    <div className="App">
    <Router>
     
      <Slider/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/my-cv" element={<MyCV/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/trung-academy" element={<TrungAcademy/>} />

      </Routes>
      <Footer/>
    </Router>
    </div>

  );
}

export default App;
