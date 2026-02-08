import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
const HomePage=()=>
{
    return(
        <div className="flex justify-center items-center h-screen flex-row gap-10">
            <div className="flex flex-col justify-center items-center gap-10">
                <img className="h-[30vh] rounded-[50%]" src={logo}></img>
                <Link className="w-48 bg-[#FFFFFF] text-black p-2 rounded-md" to="/characters">Character</Link>
                <Link className="w-48 bg-[#FFFFFF] text-black p-2 rounded-md" to="/pastinterviews">Past Interviews</Link>
                <Link className="w-48 bg-[#FFFFFF] text-black p-2 rounded-md" to="/jobdescription">Start an Interview</Link>
            </div>
        </div>
    );
}

export default HomePage;