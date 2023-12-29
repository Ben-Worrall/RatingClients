import {useNavigate} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/HostRoom.css'
import Home from '../Home';
import ReactDOM from 'react-dom/client'
import { txtDB } from '../firebase/firebaseConfig';
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField} from 'firebase/firestore'
import $ from 'jquery'


const db = getFirestore()









const HostRoomHTML = () => {
  
    
    
    let navigate = useNavigate();
    
    async function GoHomeBNT(){ 
      
      
       
  //continue from GetRandomCode
  //if user presses on home, quits the website or refreshes then get put code back in data base
 //and return to home

 //if user goes home
 
  let x = document.getElementById('RoomPasswordText').innerText
  let y = String(x)
  let z = Number(y)
  const docRef = doc(db, "AvailableCodes", "bTqLQ7U8f7ScZu6uXXjj")
  updateDoc(docRef, {[y]: z})
 


  //if user refreshes page



     //back to normal
     localStorage.clear()
     navigate('/')
     window.location.reload()
    
    
  }

    function test(){
      console.log('test')
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
            <div id='HostRoomMainDisplay'>

                 <div id='ShowResultDisplay'>
                  
                  <div id='ShowResult-button'>
                    <button id='ShowResultBNT'>
                      Show Final Results
                    </button>

                  </div>

                 </div>



                  <div id='ParticipantsDisplay'>
                    <div id='Participant-text'>Judges</div> 
                    <div id='ParticipantsList'>
                    <div className='Participants-name'>Matthew</div>
                  </div>
                </div>
            </div>


            <div id="ButtonHolder-WaitingRoom">
                <button id="CloseRoomButton"  onClick={GoHomeBNT}>Close Room</button>
                
            </div>

        </div>



    )
}

export default HostRoomHTML