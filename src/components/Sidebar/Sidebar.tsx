function Sidebar (){
    return(
        <div className="fixed top-0 left-0 h-full flex flex-col pl-5 justify-start items-center gap-5">
           <div className="h-[300px] w-0.5 bg-gray"></div>
           <div className="flex flex-col gap-4">
                <a href="https://github.com/jonsnow966" target="_blank" className="cursor-pointer">
                    <img rel="icon" src="Github.svg"></img>
                </a>

                <a href="https://www.linkedin.com/in/umer-sadiq-619615386" target="_blank" className="cursor-pointer">
                    <img rel="icon" src="Linkedin.svg"></img>
                </a>

                <a href="https://www.figma.com/files/team/1534145559889077837/user/1534145557215091001?fuid=1534145557215091001" target="_blank" className="cursor-pointer">
                    <img rel="icon" src="Figma.svg"></img>
                </a>
           </div>
            
        </div>
    )
}

export default Sidebar