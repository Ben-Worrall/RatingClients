import { useNavigate } from 'react-router-dom';
import './styles/UserJoinedRoom.css'
import { getFirestore, updateDoc, doc, collection,getDocs, deleteField, deleteDoc, onSnapshot } from 'firebase/firestore'

const db = getFirestore()






const UserJoinedRoom = async () => {

    //access database of server with server code
    let code = localStorage.getItem('code')
    
   
   
    



    let navigate = useNavigate();
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
            <div id="AddFactorDiv">
                <button id="AddFactorBNT" >Add Factor</button>
            </div>
        </div>


        <div id="ButtonHolder-CreateRoom">
            <button id="HomeBNT" onClick={GoHome}>Home</button>
            <button id='BackBNT' onClick={GoBack}>Back</button>
        </div>

    </div>
    )

}

export default UserJoinedRoom







