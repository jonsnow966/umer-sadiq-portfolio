import { useNavigate } from "react-router-dom"

interface NavbarProps {
  isActive: (path: string) => boolean;
  closeMenu: () => void;
}

export default function Navbar({ isActive, closeMenu }: NavbarProps){

    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
        closeMenu();
    };

    const linkClass = (path: string) =>
        `flex items-center gap-2 px-6 py-3 text-lg transition-colors ${
        isActive(path) ? "text-white font-semibold" : "text-gray hover:text-primary"
        }`;

    return(
        <div className="w-full h-full flex flex-col justify-start items-start pb-20">
            <div className="flex flex-2 flex-col justify-start items-start pt-15 pl-10 gap-10">
                <a className={linkClass("/")} onClick={() => handleClick("/")}>
                    <span className="text-primary text-[40px] 700:text-[30px]">#</span>
                    <span className={`text-[40px] 700:text-[30px] ${
                    location.pathname === "/" ? "text-white" : "text-gray"
                    }`}>home</span>
                </a>
                <a className={linkClass("/aboutme")} onClick={() => handleClick("/aboutme")}>
                    <span className="text-primary text-[40px] 700:text-[30px]">#</span>
                    <span className={`text-[40px] 700:text-[30px] ${
                    location.pathname === "/aboutme" ? "text-white" : "text-gray"
                    }`}>about-me</span>
                </a>
                <a className={linkClass("/works")} onClick={() => handleClick("/works")}>
                    <span className="text-primary text-[40px] 700:text-[30px]">#</span>
                    <span className={`text-[40px] 700:text-[30px] ${
                    location.pathname === "/works" ? "text-white" : "text-gray"
                    }`}>works</span>
                </a>
                <a className={linkClass("/contacts")} onClick={() => handleClick("/contact")}>
                    <span className="text-primary text-[40px] 700:text-[30px]">#</span>
                    <span className={`text-[40px] 700:text-[30px] ${
                    location.pathname === "/contact" ? "text-white" : "text-gray"
                    }`}>contacts</span>
                </a>
            </div>

            <div className="w-full flex flex-1 flex-row justify-center items-center gap-3">
                <a href="https://github.com/jonsnow966" target="_blank" className="cursor-pointer">
                    <img rel="icon" src="Github.svg" className="w-18 700:w-16"></img>
                </a>

                <a href="https://www.linkedin.com/in/umer-sadiq-619615386" target="_blank" className="cursor-pointer">
                    <img rel="icon" src="Linkedin.svg" className="w-18 700:w-16"></img>
                </a>

                <a href="https://www.figma.com/files/team/1534145559889077837/user/1534145557215091001?fuid=1534145557215091001" target="_blank" className="cursor-pointer">
                    <img rel="icon" src="Figma.svg" className="w-18 700:w-16"></img>
                </a>
           </div>
        </div>
    )
}