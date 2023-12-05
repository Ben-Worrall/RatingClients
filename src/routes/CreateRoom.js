
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import './styles/CreateRoom.css'
import Home from "../Home";
import ReactDOM from 'react-dom/client';

import addFactor from '../functions/addQuestion.js'
import getRandomCode from '../functions/HostCode.js';
//import ClearText from '../functions/CreateRoomFunc.js'
//import CloseFactor from '../functions/CreateRoomFunc.js'




//clear (edit factor) text 
function ClearText(e){
    e.innerText = ""
    e.focus()
}

//exit/close current factor 

function CloseFactor(e){
    console.log(e.parentNode.parentNode)
    e.parentNode.parentNode.remove()

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
            
            <div id="RoomPassword">
                <div id="RoomPasswordTextOnly">Room Password:</div>
                <div id="RoomPasswordText">7787</div>
                <button id="CopyPassword"  >
                  Copy
                </button>
            </div>






            
            

            <div id='RatingBoard'>
                <div id="AddFactorDiv">
                    <button id="AddFactorBNT" onClick={addFactor}>Add Factor</button>
                </div>
            </div>


            <div id="ButtonHolder-CreateRoom">
                <button id="StartRoomBNT" onClick={getRandomCode} >Start Room</button>
                <button id='CreateRoomBackBNT' onClick={GoHomeBNT}>Back</button>
            </div>

        </div>
    )
}





export default CreateRoomHTML