import NavBar from "./components/NavBar";
import "./styles.css";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import About from "./components/About";
import Home from "./components/Home";
import ShowCat from "./components/ShowCat";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/funcat" element={<Cats />} />
            <Route path="/fundog" element={<Dogs />} />
            <Route path="/showcat" element={<ShowCat />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;