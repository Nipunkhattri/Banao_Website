import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Signup from './components/Signup';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/> }/>
    {/* <Route exact path='/Signup' element={<Signup/> }/> */}
    </Routes>
    </>
  );
}

export default App;
