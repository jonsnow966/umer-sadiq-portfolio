export default function Navbar(){
    return(
        <div className="w-full h-full flex flex-col justify-start items-start pb-20">
            <div className="flex flex-2 flex-col justify-start items-start pt-15 pl-10 gap-10">
                <a className="cursor-pointer flex">
                    <span className="text-primary text-[40px] 700:text-[30px]">#</span>
                    <span className="text-white text-[40px] 700:text-[30px]">home</span>
                </a>
                <a className="cursor-pointer flex ">
                    <span className="text-primary text-[40px] 700:text-[30px]">#</span>
                    <span className="text-gray text-[40px] 700:text-[30px]">about-me</span>
                </a>
                <a className="cursor-pointer flex">
                    <span className="text-primary text-[40px] 700:text-[30px]">#</span>
                    <span className="text-gray text-[40px] 700:text-[30px]">works</span>
                </a>
                <a className="cursor-pointer flex">
                    <span className="text-primary text-[40px] 700:text-[30px]">#</span>
                    <span className="text-gray text-[40px] 700:text-[30px]">contacts</span>
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