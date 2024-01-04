import {useNavigate} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/HostRoom.css'
import Home from '../Home';
import ReactDOM from 'react-dom/client'
import { txtDB } from '../firebase/firebaseConfig';
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField, deleteDoc } from 'firebase/firestore'
import $ from 'jquery'
import LOADED from '../functions/HostGetCode';
import { useEffect } from 'react';
const db = getFirestore()








const HostRoomHTML = () => {



  const beforeUnloadListener = async (event) => {
    let x = localStorage.getItem('code')
  let y = String(x)
  let z = Number(y)
  //put the server code back
  const docRef = doc(db, "AvailableCodes", "bTqLQ7U8f7ScZu6uXXjj")
  updateDoc(docRef, {[y]: z})
  //delete the server from the Servers collection
  let DocId = localStorage.getItem('DocId')
  await deleteDoc(doc(db, "Servers", DocId))
    localStorage.clear()
    window.addEventListener("beforeunload", beforeUnloadListener);
};

window.addEventListener("beforeunload", beforeUnloadListener);


  
     
  //access local storage to get the code for the user
 
 
   
    
    
    let navigate = useNavigate();
    
    async function GoHomeBNT(){ 
      
      
      window.addEventListener("beforeunload", beforeUnloadListener);

  // quits the website or refreshes then get put code back in data base and delete the server

 //get code
 
  let x = document.getElementById('RoomPasswordText').innerText
  let y = String(x)
  let z = Number(y)
  //put the server code back
  const docRef = doc(db, "AvailableCodes", "bTqLQ7U8f7ScZu6uXXjj")
  updateDoc(docRef, {[y]: z})
  //delete the server from the Servers collection
  let DocId = localStorage.getItem('DocId')
  await deleteDoc(doc(db, "Servers", DocId))



     //back to normal
     
     localStorage.clear()
     navigate('/')
     window.location.reload()
     
    
    
  }
  
   
  
    return(
       
        <div className='HostRoomApp' >

         
         {/*  display room code  */}
         
            <div id="RoomPassword">
                <div id="RoomPasswordTextOnly">Room Password:</div>
                <div id="RoomPasswordText" >{localStorage.getItem('code')}</div>
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



            {/* set the code from the local storage to be the code that appeared */}
           
        </div>
 
    
    )
}

export default HostRoomHTML