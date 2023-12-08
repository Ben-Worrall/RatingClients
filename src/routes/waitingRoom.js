import {useNavigate} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/waitingRoom.css'
import Home from '../Home';
import ReactDOM from 'react-dom/client'



const WaitingRoomHTML = () => {

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

    return(

        <div className='HostRoomApp'>


         {/*  display room code  */}

            <div id="RoomPassword">
                <div id="RoomPasswordTextOnly">Room Password:</div>
                <div id="RoomPasswordText">7787</div>
                <button id="CopyPassword"  >
                  Copy
                </button>
            </div>

            {/*  display participants  */}
            <div id='RoomParticipants'>
                <div id='Participant-text'>Participants:</div> 
                <div id='ParticipantsList'>
                  <div className='Participants-name'>Matthew</div>
                  <div className='Participants-name'>Mark</div>
                  <div className='Participants-name'>Luke</div>
                  <div className='Participants-name'>John</div>
                  
                </div>
            </div>


            <div id="ButtonHolder-WaitingRoom">
                <button id="StartRoomButton"  >Start Room</button>
                <button id='HomeButton' onClick={GoHomeBNT}>Home</button>
            </div>

        </div>



    )
}

export default WaitingRoomHTML