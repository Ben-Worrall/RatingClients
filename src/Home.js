import { Link} from "react-router-dom";
const Home= () => {
    return (
        <div>
          <Link to='/routes/CreateRoom'>
          <button className="BNT">CreateRoom</button>
        </Link>
        <Link to='/routes/JoinRoom'>
          <button className="BNT">JoinRoom</button>
        </Link>
        </div>
  
    )
}


export default Home