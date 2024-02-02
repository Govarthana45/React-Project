import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components.js/Footer";
import Home from "./Components.js/Home";
// import Icon from "./Components.js/Icon";
import Motorcycles from "./Components.js/Motorcycles";
import Navbar from "./Components.js/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components.js/About";
import Favourite from "./Components.js/Favourites";
import Booking from "./Components.js/Booking";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bike" element={<Motorcycles />} />
        <Route path="about" element={<About />} />
        <Route path="heart" element={<Favourite />} />
      </Routes>
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
