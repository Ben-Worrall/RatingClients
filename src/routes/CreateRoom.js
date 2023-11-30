
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import './styles/CreateRoom.css'
import Home from "../Home";
import ReactDOM from 'react-dom/client';
//import addFactor from '../functions/CreateRoomFunc.js'
//import ClearText from '../functions/CreateRoomFunc.js'
//import CloseFactor from '../functions/CreateRoomFunc.js'



function addFactor(){
    
    console.log('test')
    
} 







const CreateRoomHTML= () => {
    let navigate = useNavigate();
    async function GoHomeBNT(){
        navigate('/')
        const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      document.getElementById('root')
    )
      
     }
    return (
        <div className="App">
            
            <button id='CreateRoomBackBNT' onClick={GoHomeBNT}>back</button>
            
            <div id="AddFactorDiv">
                <button id="AddFactorBNT" onClick={addFactor}>Add Factor</button>
            </div>
        </div>
    )
}





export default CreateRoomHTML