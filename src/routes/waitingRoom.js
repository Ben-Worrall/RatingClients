import {useNavigate} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/waitingRoom.css'
import Home from '../Home';
import ReactDOM from 'react-dom/client'
import { txtDB } from '../firebase/firebaseConfig';
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField} from 'firebase/firestore'
import $ from 'jquery'


const db = getFirestore()

//generate random code

var randomCode 
var readyToUse
var CurStringCode
function GenerateCode(){
  //randomCode = Math.floor(1000 + Math.random() * 9000)
  randomCode = 1000
}

//generate random code from database

const GetRandomCode = async () => {

  GenerateCode()
  
  //query the random code and then get that code from the database

  const querySnapshot = await getDocs(collection(db, "AvailableCodes"));
  querySnapshot.forEach((doc) => {
  //console.log(doc.data()[randomCode])
  readyToUse = doc.data()[randomCode]
  document.getElementById('RoomPasswordText').innerHTML = readyToUse
 });

 CurStringCode = String(readyToUse)
 //delete the code from the database after accessing it
 const deleteFields = doc(db, "AvailableCodes", "bTqLQ7U8f7ScZu6uXXjj")
 await updateDoc(deleteFields, {[CurStringCode]: deleteField()})

 


    
 

}



const WaitingRoomHTML = () => {
  
    
    GetRandomCode()
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