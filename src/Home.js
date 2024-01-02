import { Link, useParams} from "react-router-dom";
import CreateRoomHTML from "./routes/CreateRoom";
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import JoinRoom from "./routes/JoinRoom";










 


const Home = () => {
  

  let navigate = useNavigate();
  
  async function CreateRoomURL(){

   



     navigate('/routes/CreateRoom/')
     
    //NewCreatedRoomUrl = NewWebId
    //NewWebId = makeid(20)
    //navigate('/routes/CreateRoom/'+NewWebId)
    
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
      
        <div id="holder">
          
            
          <button className="BNT" onClick={CreateRoomURL}>CreateRoom</button>
         
        
          <button className="BNT" onClick={JoinRoomURL}>JoinRoom</button>
        
        </div>
  
    )
}


export default Home

