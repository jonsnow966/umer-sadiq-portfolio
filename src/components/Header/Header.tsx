import {useState, useEffect, useRef} from "react"
import Navbar from "../Navbar/Navbar"

function Header (){

    const [isNavOpen, setIsNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const navButtonRef = useRef<HTMLButtonElement | null>(null);

    const toggleNavbar = () =>{
        setIsNavOpen(!isNavOpen);
    }

    useEffect(() => {
        const handleClickOutside = (event : MouseEvent) => {
        console.log('navRef:', navRef.current, 'navButtonRef:', navButtonRef.current);
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


    return(
        <div className="fixed top-0 flex justify-center items-center z-100 bg-background h-[91px] 800:h-[61px] 
        w-full 800:w-[75%]">

            <div className="w-full h-full flex flex-row px-2 shadow-sm pl-8 pb-5 pt-5 800:pl-0 800:pb-0">

                <div className="w-[250px] flex justify-start items-end gap-2 800:gap-1">
                    <img rel="icon" src="favicon.png" className="w-10  800:w-[30px]"></img>
                    {/* <img rel="icon" src="favicon-2.png" className=" w-[80px] "></img> */}
                    <p className="font-fira text-white text-[25px] 800:text-[20px]">Umer</p>
                    <p className="font-fira text-white text-[25px] 800:text-[20px]">Sadiq</p>
                </div>
                <div className=" flex flex-2 justify-end items-end pr-5 800:pr-0 gap-4 900:gap-8 1000:gap-10">
                    <a className="cursor-pointer hidden 800:flex">
                        <span className="text-primary text-[18px] 900:text-[20px]">#</span>
                        <span className="text-white text-[18px] 900:text-[20px]">home</span>
                    </a>
                    <a className="cursor-pointer hidden 800:flex">
                        <span className="text-primary text-[18px] 900:text-[20px]">#</span>
                        <span className="text-gray text-[18px] 900:text-[20px]">about-me</span>
                    </a>
                    <a className="cursor-pointer hidden 800:flex">
                        <span className="text-primary text-[18px] 900:text-[20px]">#</span>
                        <span className="text-gray text-[18px] 900:text-[20px]">works</span>
                    </a>
                    <a className="cursor-pointer hidden 800:flex">
                        <span className="text-primary text-[18px] 900:text-[20px]">#</span>
                        <span className="text-gray text-[18px] 900:text-[20px]">contacts</span>
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
                    ${
                    isNavOpen ? 'w-screen xs:w-[350px] sm:w-[400px] 800:hidden' : 'w-px'
                    }`}
                    ref={navRef}>
                    <Navbar/>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header