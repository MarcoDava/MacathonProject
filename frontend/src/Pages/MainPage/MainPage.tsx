import { Link } from 'react-router-dom';
import hero from "../../assets/HeroImage.png";
const HomePage=()=>
{
    return(
        <div className="flex justify-center items-center h-full flex-col pt-[10vh] gap-10">
                <div className="h-[35vh] w-[50vw] flex justify-center items-center bg-radial from-white/7 from-5% to-transparent rounded-lg shadow-lg">
                    <img className="h-[30vh] rounded-[50%]" src={hero}></img>
                </div>
                <Link className="w-48 bg-[#FFFFFF] text-black p-2 rounded-md" to="/characters">Character</Link>
                <Link className="w-48 bg-[#FFFFFF] text-black p-2 rounded-md" to="/pastinterviews">Past Interviews</Link>
                <Link className="w-48 bg-[#FFFFFF] text-black p-2 rounded-md" to="/jobdescription">Start an Interview</Link>
        </div>
    );
}

export default HomePage;