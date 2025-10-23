function Header (){
    return(
        <div className="fixed top-0 w-full h-[61px] flex justify-center items-center">
            <div className="w-[85%] h-full flex flex-row pb-2 px-2 shadow-sm">
                <div className="w-[250px] flex justify-start items-end gap-1">
                    <img rel="icon" src="favicon.png" className=" w-[30px]"></img>
                    {/* <img rel="icon" src="favicon-2.png" className=" w-[80px] "></img> */}
                    <p className="font-fira text-white text-[20px]">Umer</p>
                    <p className="font-fira text-white text-[20px]">Sadiq</p>
                </div>
                <div className="w-full flex justify-end items-end gap-10">
                    <a className="cursor-pointer">
                        <span className="text-primary text-[20px]">#</span>
                        <span className="text-white text-[20px]">home</span>
                    </a>
                    <a className="cursor-pointer">
                        <span className="text-primary text-[20px]">#</span>
                        <span className="text-gray text-[20px]">about-me</span>
                    </a>
                    <a className="cursor-pointer">
                        <span className="text-primary text-[20px]">#</span>
                        <span className="text-gray text-[20px]">works</span>
                    </a>
                    <a className="cursor-pointer">
                        <span className="text-primary text-[20px]">#</span>
                        <span className="text-gray text-[20px]">contacts</span>
                    </a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header