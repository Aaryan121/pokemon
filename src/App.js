import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./pages/mainPage/MainPage";
import "./App.css"
import SinglePoke from "./pages/singlePoke/SinglePoke";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
  <Router>  
    <Navbar />
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route exact path="/poke/:pokeId" element={<SinglePoke />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
