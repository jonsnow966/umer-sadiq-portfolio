function Home(){
    return(
        <div className="relative top-[61px] w-[85%] h-fit flex">
            <div className="w-[60%] ">
                <h1 className="text-white font-bold text-[34px] mt-20">Umer is a <span className="text-primary">web designer</span> and 
                <span className="text-primary"> front-end developer</span></h1>

                <p className="text-gray text-[18px] mt-10 ">He crafts responsive websites where technologies meet creativity</p>

                <button className="border border-primary py-1 px-3 text-white mt-10 cursor-pointer">
                    Contact me !!
                </button>

                <img rel="image" src="quote.png" className="mt-8"></img>
            </div>
            <div className="w-[40%] ">
                <div className="flex justify-end">

                    <img rel="image" src="pic-3.png" className="pt-[38px]"></img>
                    {/* <img rel="icon" src="favicon-transparent.png" className="w-100 absolute top-5 left-60 z-0"></img>
                    <img rel="icon" src="Outline.svg" className="transform rotate-40 w-60 absolute -top-2 right-40 z-0"></img>
                    <img rel="icon" src="Outline.svg" className="w-60 absolute top-2 right-20 z-0"></img>
                    <img rel="icon" src="Outline.svg" className="transform rotate-40 w-60 absolute top-35 left-80 z-0"></img>
                    <img rel="icon" src="Outline.svg" className="w-60 absolute top-36 left-40 z-0"></img>

                    <img rel="icon" src="Dots.png" className="transform rotate-40 w-20 absolute top-50 right-15 z-0"></img>
                    <img rel="icon" src="Dots.png" className="w-20 absolute top-10 left-40 z-0"></img>
                    <img rel="icon" src="Dots.png" className="transform rotate-40 w-20 absolute top-20 left-70 z-0"></img>
                    <img rel="icon" src="Dots.png" className="w-20 absolute top-65 right-20 z-0"></img> */}
                </div>
            </div>
        </div>
    )
}

export default Home