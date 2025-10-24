function Home(){
    return(
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-col 600:flex-row">
                <div className="w-full 600:w-[50%] flex flex-col justify-start items-start gap-10
                 pt-20">
                    <h1 className="text-white font-bold 
                    text-[28px] 600:text-[22px] 700:text-[28px] 1000:text-[34px]
                    1300:text-[40px] 1700:text-[50px]
                    ">Umer is a <span className="text-primary">web designer</span> and 
                    <span className="text-primary"> front-end developer</span></h1>

                    <p className="text-gray 
                    text-[18px] 600:text-[14px] 700:text-[16px] 1000:text-[18px] 
                    1300:text-[22px] 1700:text-[24px] 
                    ">He crafts responsive websites where technologies meet creativity</p>

                    <button className="w-fit border border-primary py-1 px-3 text-white
                    text-[18px] 1300:text-[22px] 1700:text-[24px]
                    hover:text-primary hover:border-white hover:bg-background-2
                    cursor-pointer">
                        Contact me !!
                    </button>

                </div>

                <div className="w-full 600:w-[50%] flex justify-end">
                    <img rel="image" src="pic-3.png" className="pt-[8%] w-150 600:w-100 700:w-120 
                    1300:w-130 1600:w-140 1700:w-150"></img>
                </div>
                
            </div>
            <div className="flex justify-center items-center pt-10 pb-10">
                <img rel="image" src="quote-1.png" className="w-full flex 600:hidden"></img>
                <img rel="image" src="quote.png" className="hidden 600:flex 600:w-[90%] 700:w-[80%]"></img>
            </div>  
        </div>
    )
}

export default Home