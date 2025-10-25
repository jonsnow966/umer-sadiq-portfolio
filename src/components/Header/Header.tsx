import {useState, useEffect, useRef} from "react"
import Navbar from "../Navbar/Navbar"
import { useLocation, useNavigate } from "react-router-dom";

function Header (){
    
    const location = useLocation();
    const navigate = useNavigate();

    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const navButtonRef = useRef<HTMLButtonElement | null>(null);

    const toggleNavbar = () =>{
        setIsNavOpen((prev) => !prev);
    }

    useEffect(() => {
        const handleClickOutside = (event : MouseEvent) => {
        if (
            navRef.current &&
            !navRef.current.contains(event.target as Node) &&
            navButtonRef.current &&
            !navButtonRef.current.contains(event.target as Node)
        ) {
            setIsNavOpen(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getDesktopLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `cursor-pointer hidden 800:flex items-center gap-1 transition-colors ${
        isActive
            ? "text-black"
            : "text-gray hover:text-primary"
        }`;
    };

    const isActive = (path: string) => location.pathname === path;

    return(
        <div className="fixed top-0 flex justify-center items-center z-100 bg-background h-[91px] 800:h-[61px] 
        w-full 800:w-[75%]">

            <div className="w-full h-full flex flex-row shadow-sm pl-8 pr-2 pb-5 pt-5 800:pl-0 800:pb-0">

                <div className="w-[250px] flex 800:pl-2 800:pb-1 justify-start items-end gap-2 800:gap-1">
                    <img rel="icon" src="favicon.png" className="w-10  800:w-[30px]"></img>
                    {/* <img rel="icon" src="favicon-2.png" className=" w-[80px] "></img> */}
                    <p className="font-fira text-white text-[25px] 800:text-[20px]">Umer</p>
                    <p className="font-fira text-white text-[25px] 800:text-[20px]">Sadiq</p>
                </div>
                <div className=" flex flex-2 justify-end items-end pb-1 pr-5 800:pr-0 gap-4 900:gap-8 1000:gap-10">
                    <a className={getDesktopLinkClass("/home")}
                    onClick={() => navigate("/")}>
                        <span className="text-primary text-[18px] 900:text-[20px]">#</span>
                        <span className={`text-[18px] 900:text-[20px] ${
                        location.pathname === "/" ? "text-white" : "text-gray"
                        }`}>home</span>
                    </a>
                    <a className={getDesktopLinkClass("/about")}
                    onClick={() => navigate(`/aboutme`)}>
                        <span className="text-primary text-[18px] 900:text-[20px]">#</span>
                        <span className={`text-[18px] 900:text-[20px] ${
                        location.pathname === "/aboutme" ? "text-white" : "text-gray"
                        }`}>about-me</span>
                    </a>
                    <a className={getDesktopLinkClass("/works")}
                    onClick={() => navigate(`/works`)}>
                        <span className="text-primary text-[18px] 900:text-[20px]">#</span>
                        <span className={`text-[18px] 900:text-[20px] ${
                        location.pathname === "/works" ? "text-white" : "text-gray"
                        }`}>works</span>
                    </a>
                    <a className={getDesktopLinkClass("/contact")}
                    onClick={() => navigate(`/contact`)}>
                        <span className="text-primary text-[18px] 900:text-[20px]">#</span>
                        <span className={`text-[18px] 900:text-[20px] ${
                        location.pathname === "/contact" ? "text-white" : "text-gray"
                        }`}>contacts</span>
                    </a>
                    <button className="cursor-pointer flex 800:hidden"
                    onClick={toggleNavbar}
                    ref={navButtonRef}>
                        <img rel="icon" src="ham.png" className="w-8"></img>
                    </button>

                    <div className={`fixed top-[95px] right-0 z-100 
                    flex items-center justify-center overflow-hidden equal-shadow
                    transition-all duration-300 ease-in-out
                    h-screen bg-[#282c33f5]
                    ${isNavOpen ? 'w-screen xs:w-[350px] sm:w-[400px] 800:hidden' : 'w-px'}`}
                    ref={navRef}>
                    <Navbar isActive={isActive} closeMenu={() => setIsNavOpen(false)}/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header