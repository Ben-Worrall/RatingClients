
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import './styles/CreateRoom.css'
import Home from "../Home";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import addFactor from '../functions/addQuestion.js'
import GetRandomCode from '../functions/HostCode.js';
import WaitingRoomHTML from './waitingRoom.js';
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

for(let i =0; i < 10; i++){
  for(let k =0; k < 10; k++){
    console.log(i,k)
  }
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


     async function GoWaitingRoom(){
       // var URL = window.location.href
        //var newURL = URL.substring(URL.length - 20)
        //navigate('/routes/waitingRoom/'+newURL)
        navigate('/routes/waitingRoom/')

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <BrowserRouter>
            <WaitingRoomHTML />
          </BrowserRouter>,
          document.getElementById('root')
        )
     }

    return (
        <div className="App">
            
            {/*<div id="RoomPassword">
                <div id="RoomPasswordTextOnly">Room Password:</div>
                <div id="RoomPasswordText">7787</div>
                <button id="CopyPassword"  >
                  Copy
                </button>
            </div>*/}






            
            

            <div id='RatingBoard'>
                <div id="AddFactorDiv">
                    <button id="AddFactorBNT" onClick={addFactor}>Add Factor</button>
                </div>
            </div>


            <div id="ButtonHolder-CreateRoom">
                <button id="StartRoomBNT" onClick={GoWaitingRoom} >Start Room</button>
                <button id='CreateRoomBackBNT' onClick={GoHomeBNT}>Back</button>
            </div>

        </div>
    )
}





export default CreateRoomHTML