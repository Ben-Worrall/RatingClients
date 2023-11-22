import { Link} from "react-router-dom";
import './styles/JoinRoom.css'

const JoinRoom= () => {
    return (
        
        
        
        <div id='JoinRoomHolder'>

            <Link to='/'>
            <button id='JoinRoomBackBNT'>back</button>
            </Link>

            <input placeholder="Room Code" id='JoinRoomInput'></input>
            <button id="JoinRoomBNT">Join</button>
        </div>
    )
}


export default JoinRoom