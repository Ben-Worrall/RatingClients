import { Link} from "react-router-dom";
import './styles/JoinRoom.css'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from "../Home";

const JoinRoom = () => {
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

    return (
        
        
        
        <div id='JoinRoomHolder'>

           
            <button id='JoinRoomBackBNT' onClick={GoHomeBNT}>back</button>
            

            <input placeholder="Room Code" id='JoinRoomInput'></input>
            <button id="JoinRoomBNT">Join</button>
        </div>
    )
}


export default JoinRoom