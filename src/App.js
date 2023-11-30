
import db from "./firebase"
import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import JoinRoute from './routes/JoinRoom'
import Home from './Home'
import CreateRoomHTML from "./routes/CreateRoom";
import {defineRoutes} from "react-router-dom"



//loop through the max amount of possible paths, and run the "createing path function"


function App() {
  
  return (
    <Router>
       <div className="App">
        <Routes>

          <Route exact path='/' element={<Home/>} />
          <Route exact path='/routes/JoinRoom' element={<JoinRoute/>} />

          
          

        </Routes>
        </div>

    </Router>
      
    
  );
}


 

 export default App;
