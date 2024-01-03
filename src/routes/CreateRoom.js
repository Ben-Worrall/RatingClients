
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import './styles/CreateRoom.css'
import Home from "../Home";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import addFactor from '../functions/addQuestion.js'

import HostRoomHTML from './HostRoom.js';
//import ClearText from '../functions/CreateRoomFunc.js'
//import CloseFactor from '../functions/CreateRoomFunc.js'
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField, addDoc, getDoc} from 'firebase/firestore'
import { txtDB } from '../firebase/firebaseConfig';


const db = getFirestore()


//if user reloads page
window.addEventListener("beforeunload", function(e){
  let x = document.getElementById('RoomPasswordText').innerText
  let y = String(x)
  let z = Number(y)
  const docRef = doc(db, "AvailableCodes", "bTqLQ7U8f7ScZu6uXXjj")
  updateDoc(docRef, {[y]: z})
});


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



//generate random code

var randomCode 
var readyToUse
var CurStringCode
function GenerateCode(){
  //randomCode = Math.floor(1000 + Math.random() * 9000)
  randomCode = 1000
}

//generate random code from database







const CreateRoomHTML= () => {



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
  
  
  GetRandomCode()









  

    let navigate = useNavigate();
    async function GoHomeBNT(){
      localStorage.clear()
      navigate('/')
      window.location.reload()
    
      
     }






     //when user presses start on the "start room" button

     
     async function GoHostRoom(){
      let docId 
      

      //add server code in the form of a document
      const dbRef = collection(db, "Servers")
      const data = {
        code: Number(document.getElementById('RoomPasswordText').innerHTML)
     };
     addDoc(dbRef, data).then(function(docRef) {
      
      docId = docRef.id
      localStorage.setItem('DocId', docRef.id)

  }).then(async function (){

//find the document that the code was saved to
const docRef = doc(db, "Servers", docId);

//now that we have the document, add a collection for each factor
 //send codes to 
 let AllFactorText = document.querySelectorAll('.factor')
 
 for(let i = 0; i < AllFactorText.length; i++){
  
     //if the factor isnt empty then move on
     if(AllFactorText[i].childNodes[0].value !== ""){
         //console.log(AllFactorText[i].childNodes[0].value)
         //add factor in the form of a collection to the server code (document)
         const colRef = collection(docRef , AllFactorText[i].childNodes[0].value)
         addDoc(colRef, {
          Host: "Host"
         });
     }
   
 }



  })
  .then(function(){


//send code to local storage
let Code = document.getElementById('RoomPasswordText').innerText
//send code to local storage for hostroom to access
 localStorage.setItem('code', Code)

 
  }).then(function(){


    navigate('/routes/HostRoom/')
    window.location.reload()


  })
     


       
        

    
        
        
     }









    return (
        <div className="App">
            
            <div id="RoomPassword">
                <div id="RoomPasswordTextOnly">Room Password:</div>
                <div id="RoomPasswordText"></div>
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
                <button id="StartRoomBNT" onClick={GoHostRoom} >Start Room</button>
                <button id='CreateRoomBackBNT' onClick={GoHomeBNT}>Back</button>
            </div>

        </div>
    )
}





export default CreateRoomHTML