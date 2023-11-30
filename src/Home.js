import { Link, useParams} from "react-router-dom";
import CreateRoomHTML from "./routes/CreateRoom";
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import JoinRoom from "./routes/JoinRoom";


//create a random game id 
const makeid =(length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}




//create new id and store the id so can assign html to that url
var NewWebId = makeid(20)

 var NewCreatedRoomUrl = NewWebId

 


const Home = () => {

  let navigate = useNavigate();
  
  async function CreateRoomURL(){
     navigate('/routes/CreateRoom/'+NewWebId)
    NewCreatedRoomUrl = NewWebId
    NewWebId = makeid(20)
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
        <CreateRoomHTML />
      </BrowserRouter>,
      document.getElementById('root')
    )
  }
  async function JoinRoomURL(){
    navigate('/routes/JoinRoom/')
   
   
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <BrowserRouter>
       <JoinRoom />
     </BrowserRouter>,
     document.getElementById('root')
   )
 }

    return (
        <div>
          
            
          <button className="BNT" onClick={CreateRoomURL}>CreateRoom</button>
         
        
          <button className="BNT" onClick={JoinRoomURL}>JoinRoom</button>
        
        </div>
  
    )
}


export default Home

