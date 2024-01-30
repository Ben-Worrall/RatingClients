import { useNavigate } from 'react-router-dom';
import './styles/UserJoinedRoom.css'
import React from 'react';
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField, deleteDoc, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import SubmitAnswer from '../functions/submitAnswers';

const db = getFirestore()






const UserJoinedRoom =  () => {
    let navigate = useNavigate();
    const effectRan = useRef(false);
    useEffect(() => {
        if (!effectRan.current) {
          console.log("effect applied - only on the FIRST mount");

//access database of server with server code
let GameCode = localStorage.getItem('code')
    
async function addFactorsAuto(){

    const colRef = collection(db, "Servers");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
        //console.log(doc.data());
        //if server doc.code matches with gamecode 
        if(doc.data().code == GameCode){
            //get all the values from the doc excpet for the gamecode
            //values are used for the sub collection Ids
            //but add the factors to the Users page (values)
            const {code ,...otherProperties} = doc.data();
            const personClone = {...otherProperties};
            //console.log(personClone)


            //turn all the values (factor names) into an array to access
            let ArrOfFactors = Object.keys(personClone)
            
            ArrOfFactors = ArrOfFactors.sort((a,b) => a?.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}))

           

            for(let i =0; i<ArrOfFactors.length; i++){
                 


                //for each factor
                //add it to the users page for him/her to rate
                 //create "rating question" (factor)
                let factor = document.createElement('div')
                factor.classList.add('factor')
                         
             //the question that user is rating off of
             let factorText = document.createElement('div')
             factorText.classList.add('factorText')
             factorText.innerText = ArrOfFactors[i]
             factorText.spellcheck = "false"
             
             //for the user to rate
             let factorRating = document.createElement('div')
             factorRating.classList.add('factorRating')
         
         
             //for  question mark (user will be able edit and rate)
             let div1 = document.createElement('input')
             div1.classList.add('ratingFor')
             div1.placeholder = "?"
             div1.contentEditable = "true"
             factorRating.appendChild(div1)
         
         
         
         
         
             //just a slash
             let div2 = document.createElement('div')
             div2.classList.add('slash')
             div2.innerText = "/"
             factorRating.appendChild(div2)
         
         
             // what the rating is out of (10) can make host edit it later maybe
             let div3 = document.createElement('div')
             div3.classList.add('ratingOutOf')
             div3.innerText = "10"
             div3.spellcheck = "false"
             div3.contentEditable = "false"
             factorRating.appendChild(div3)
         
             
          
         
         
             //everything ot each other then append that to the rating board
             //append factor to the rating board
             factor.appendChild(factorText)
             factor.appendChild(factorRating)
             document.getElementById('RatingBoard').appendChild(factor)
         
                         }
         
                     }
                 })
          
    
    
}

addFactorsAuto()


        }
      
        return () => effectRan.current = true;
      }, []);
    
    
    
   
    
   
   
    



    
    function GoBack(){
        localStorage.clear()
        navigate('/routes/JoinRoom/')
    window.location.reload()

    }
    function GoHome(){
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }
    async function Submit(){
        
        SubmitAnswer()
        
        
    }
    







    return (
        <div className="App">
            
        <div id="RoomPassword">
            <div id="RoomPasswordTextOnly">Room Password:</div>
            <div id="RoomPasswordText">{localStorage.getItem('code')}</div>
            <button id="CopyPassword"  >
              Copy
            </button>
        </div>


        <div id='RatingBoard'>
           
        </div>


        <div id="ButtonHolder-CreateRoom">
            <button id="HomeBNT" onClick={GoHome}>Home</button>
            <button id='BackBNT' onClick={GoBack}>Back</button>
            <button id='SubmitBNT' onClick={Submit}>Submit</button>
            <NavLink to="/routes/SuccessfullySubmitted" id='ToSuccess' ></NavLink>
        </div>

    </div>
    )


}

export default UserJoinedRoom







