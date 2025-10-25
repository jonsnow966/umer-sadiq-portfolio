function Footer(){
    const email = "umar9733@yahoo.com";

    const mailtoLink = `mailto:${email}`;

    return(
        // <div className="w-full 300:px-10 600:px-0 600:w-[75%] flex flex-col bg-background gap-10">
        <div className="bg-background w-full 600:w-[75%] h-fit flex flex-col gap-10 pb-5 pt-5 px-7 600:px-0">
            <div className="flex flex-col gap-10 500:gap-10 500:flex-row 300:px-0">
                <div className="w-full">
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
                <div className="w-full flex 500:justify-end">
                    <div className="w-fit gap-3 300:gap-7 500:gap-1 flex
                    flex-col 300:flex-row items-center 500:flex-col 500:justify-start 500:items-start p-0">
                        <p className="font-fira text-white font-extrabold text-2xl 800:text-[18px]">Connect:</p>
                        <div className="flex gap-2 ">
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
            </div>
            <div className="flex w-full justify-center items-center px-2 300:px-0 ">
                 <p className="font-fira text-gray text-[15px] 800:text-[12px]">&copy; Copyright 2025. Developed by Umer</p>
            </div>
        </div>
    )
}   

export default Footer