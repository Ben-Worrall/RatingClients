import {useNavigate} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/waitingRoom.css'
import Home from '../Home';
import ReactDOM from 'react-dom/client'
import { txtDB } from '../firebase/firebaseConfig';
import { getFirestore, updateDoc, doc, collection,getDocs,} from 'firebase/firestore'


const db = getFirestore()

//generate random code

var randomCode 
var readyToUse
function GenerateCode(){
  randomCode = Math.floor(1000 + Math.random() * 9000)
}

//generate random code from database

const GetRandomCode = async () => {

  GenerateCode()
  
  
  const querySnapshot = await getDocs(collection(db, "AvailableCodes"));
  querySnapshot.forEach((doc) => {
  //console.log(doc.data()[randomCode])
  readyToUse = doc.data()[randomCode]
  document.getElementById('RoomPasswordText').innerHTML = readyToUse
 });
    

    
  //get url of the room

}



const WaitingRoomHTML = () => {
  
    let navigate = useNavigate();
    GetRandomCode()
    
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
                <div id="RoomPasswordText" ></div>
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