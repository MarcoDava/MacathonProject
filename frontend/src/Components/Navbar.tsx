import { useState } from "react";
import { Link } from "react-router";
import logo from '../assets/react.svg';
import { motion } from "motion/react"



const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    return(
        <motion.div initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }}className="fixed top-0 left-0 right-0 flex flex-row justify-start items-start h-full w-[15vh] z-50">
            <div className="pt-[3vh] nav-container flex justify-start items-center flex-col gap-[5vh] bg-[#000000]/90 h-[100vh] shadow-lg/15">
                <img className={`overflow-hidden transition-all rounded-[1vh] ${expanded ? "ml-5 h-[10vh]": "w-0"}`} src={logo} alt="Logo"></img>
                <Link className={`overflow-hidden transition-all text-white ${expanded ? "mt-[7vh] w-40": "mt-[7vh] w-0"}`} to="/">Home</Link>
                <Link className={`overflow-hidden transition-all text-white ${expanded ? " w-40": "w-0"}`} to="/pastinterviews">Interviews</Link>
                <Link className={`overflow-hidden transition-all text-white ${expanded ? " w-40": "w-0"}`} to="/characters">Character</Link>

            </div>
            <button className="ml-[2vh] mt-[2vh]" onClick={()=>setExpanded(curr=>!curr)}>{
            expanded ? 
            <div className="flex flex-row justify-center items-center bg-[#FFFFFF]  h-[7vh] w-[7vh] p-[1.5vh] shadow-lg/15 rounded-[50%]">
                <img className="h-full" src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="Expand"></img>
            </div>    
                :
            <div className="flex flex-row justify-between items-center bg-[#FFFFFF] h-[7vh] w-[14vh] p-[1.5vh] shadow-lg/15 rounded-[3.5vh]">
                <img className="h-[6vh] rounded-[1vh]" src={logo}></img>
                <img className="h-full rotate-180" src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="Collapse"></img>
            </div>
            }</button>
        </motion.div>
    )
}

export function NavBarItems({}){
    return(
        <div/>
    )
}

export default Navbar;