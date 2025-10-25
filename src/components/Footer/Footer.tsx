function Footer(){
    const email = "umar9733@yahoo.com";

    const mailtoLink = `mailto:${email}`;

    return(
        <div className="w-full px-10 600:p-0 600:w-[75%] flex flex-col bg-background gap-10">
            <div className="flex flex-col gap-10 500:gap-10 500:flex-row">
                <div className="w-full 500:w-[80%] 600:w-[90%]">
                    <div className="w-full mt-1 flex gap-1 items-center">
                        <img rel="icon" src="favicon.png" className="w-8  800:w-5 mr-1"></img>
                        <p className="font-fira text-white text-[20px] 800:text-[12px]">Umer</p>
                        <p className="font-fira text-white text-[20px] 800:text-[12px]">Sadiq</p> 
                        {/* <p className="font-fira text-gray ml-4 text-[15px] 800:text-[12px]">umar9733@yahoo.com</p> */}
                    </div>
                    <div className="w-full justify-start items-start mt-3">
                        <p className="font-fira text-white text-[16px] 800:text-[12px]">Web designer and front-end developer</p>
                    </div>
                </div>
                <div className="w-full 500:w-[30%] 600:w-[10%] gap-7 500:gap-1 flex flex-row items-center 500:flex-col 500:justify-start 500:items-start p-0">
                    <p className="font-fira text-white font-extrabold text-2xl 800:text-[18px]">Contact</p>
                    <div className="flex gap-2">
                        <a href="https://wa.me/03332050848" target="_blank" 
                        className="w-8 500:w-7
                        cursor-pointer flex justify-center items-center rounded-[3px] hover:bg-background-2">
                            <img rel="icon" src="whatsapp.svg" className="w-8 500:w-7  600:w-6"></img>
                        </a>
                        <a href={mailtoLink}
                        className="w-10 600:w-8 500:w-9 
                        cursor-pointer
                        rounded-[3px] hover:bg-background-2">
                            <img rel="icon" src="Email.svg" className="w-10 500:w-9  600:w-8"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/umer-sadiq-619615386" target="_blank" 
                        className="w-9 500:w-8 600:w-7
                        cursor-pointer flex justify-center items-center rounded-[3px] hover:bg-background-2">
                            <img rel="icon" src="Linkedin.svg" className="w-9 500:w-8 600:w-7"></img>
                        </a>
                        
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-center">
                 <p className="font-fira text-gray text-[15px] 800:text-[12px]">&copy; Copyright 2025. Developed by Umer</p>
            </div>
        </div>
    )
}   

export default Footer