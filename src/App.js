
import {BrowserRouter as Router,
Routes,
Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutMe from "./pages/AboutMe"
import MyCV from "./pages/MyCV"
import Projects from "./pages/Projects"
import TrungAcademy from "./pages/projects/TrungAcademy"
import TrungEcommerce from "./pages/projects/TrungEcommerce"
import TrungRealtime from "./pages/projects/TrungRealTime"
import TrungMovie from "./pages/projects/TrungMovie"
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
        <Route path="/projects/academy" element={<TrungAcademy/>} />
        <Route path="/projects/e-commerce" element={<TrungEcommerce/>} />
        <Route path="/projects/real-time" element={<TrungRealtime/>} />
        <Route path="/projects/movie" element={<TrungMovie/>} />


      </Routes>
      <Footer/>
    </Router>
    </div>

  );
}

export default App;
