
import db from "./firebase"
import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import JoinRoute from './routes/JoinRoom'
import CreateRoute from './routes/CreateRoom'
import Home from './Home'


function App() {
  return (

    
    <Router>

        {/*<Link to='/routes/JoinRoute'>
          <button className="BNT">JoinRoom</button>
        </Link>

        <Link to='/routes/CreateRoute'>
          <button className="BNT">CreateRoom</button>
  </Link>*/}
       
     
       <div className="App">
        <Routes>


          <Route exact path='/' element={<Home/>} />
          <Route exact path='/routes/JoinRoom' element={<JoinRoute/>} />
          <Route exact path='/routes/CreateRoom' element={<CreateRoute/>} />


        </Routes>
        </div>

    </Router>
      
    
  );
}


export default App;
