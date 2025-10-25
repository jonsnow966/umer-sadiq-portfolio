import data from '../../assets/JSON/data.json';
import CardGenerator from '../CardGenerator/CardGenerator';


function About(){
    return(
        <div className="w-full flex flex-col gap-30">
            <div className="w-full flex flex-col 600:flex-row gap-10 600:gap-2">
                <div className="w-full 1600:w-[90%]">
                    <h1 className="text-white font-bold 
                    text-[28px] 600:text-[22px] 700:text-[28px] 1000:text-[34px]
                    1300:text-[40px] 1700:text-[50px]
                    "><span className="text-primary">/</span>about-me</h1>

                    <p className="text-white 
                    text-[18px] 600:text-[14px] 700:text-[16px] 1000:text-[18px] 
                    1400:text-[22px] 
                    ">Who am i?</p>

                    <p className="text-gray mt-4 900:mt-8
                    600:text-[12px]
                    1000:text-[14px]
                    1100:text-[16px]
                    1200:text-[18px]
                    1400:text-[20px]
                    ">Hello, I'm Umer!</p>

                    <p className="text-gray mt-4 900:mt-8
                    600:text-[12px]
                    1000:text-[14px]
                    1100:text-[16px]
                    1200:text-[18px]
                    1400:text-[20px]
                    ">I'm a computer science graduate and a self-taught front-end developer based in Islamabad,
                     Pakistan. I can develop responsive websites from scratch and raise them into modern user-friendly web
                      experiences.</p>

                    <p className="text-gray mt-4 900:mt-8
                    600:text-[12px]
                    1000:text-[14px]
                    1100:text-[16px]
                    1200:text-[18px] 
                    1400:text-[20px]
                    ">Transforming my creativity and knowledge into websites/apps has been my passion for over a year. 
                    I have been working to develop skills to further pursue a career as a front-end developer. I always 
                    strive to learn about the newest technologies and frameworks.</p>

                </div>

                <div className="w-full 800:w-200 1600:w-[50%] flex justify-center 600:justify-end">
                    <img rel="image" src="pic-4.png" className="max-w-full 600:max-w-[320px] 700:max-w-full 700:h-auto"></img>
                </div> 
            </div>

            <div className="w-full h-full flex flex-col gap-10 600:gap-2">
                <div className="w-full 1600:w-[90%] flex flex-col gap-10">
                    <h1 className="text-white font-bold 
                    text-[28px] 600:text-[22px] 700:text-[28px] 1000:text-[34px]
                    1300:text-[40px] 1700:text-[50px]
                    "><span className="text-primary">#</span>Education</h1>

                    {/* <div className='w-full h-fit flex justify-center items-center gap-10'> */}
                    <div className="grid grid-cols-1 500:grid-cols-2 1000:grid-cols-4 gap-10 w-full">
                        {data.map((degree) => (
                            <CardGenerator key={degree.id} degree={degree} />
                        ))}
                    </div> 
                </div>                
            </div>

            <div className="w-full h-full flex flex-col gap-10 600:gap-2">
                <div className="w-full 1600:w-[90%] flex flex-col gap-10">
                    <h1 className="text-white font-bold 
                    text-[28px] 600:text-[22px] 700:text-[28px] 1000:text-[34px]
                    1300:text-[40px] 1700:text-[50px]
                    "><span className="text-primary">#</span>skills</h1>

                    <div className="grid grid-cols-1 500:grid-cols-2 1000:grid-cols-4 gap-10 w-full">
                        <div className="bg-background border border-gray w-full">
                            <div className="bg-background text-white text-xl font-semibold p-2 border-b border-gray">
                                Languages
                            </div>
                            <div className="bg-background text-gray text-xl p-2">
                                TypeScript C++
                                JavaScript
                            </div>
                        </div>
                        
                         <div className="bg-background border border-gray w-full">
                            <div className="bg-background text-white text-xl font-semibold p-2 border-b border-gray">
                                Others
                            </div>
                            <div className="bg-background text-gray text-xl p-2">
                                HTML CSS SCSS                                
                            </div>
                        </div>

                        <div className="bg-background border border-gray w-full">
                            <div className="bg-background text-white text-xl font-semibold p-2 border-b border-gray">
                                Tools
                            </div>
                            <div className="bg-background text-gray text-xl p-2">
                                VS-Code Figma
                                Git Grok 
                                Office 
                            </div>
                        </div>

                        <div className="bg-background border border-gray w-full">
                            <div className="bg-background text-white text-xl font-semibold p-2 border-b border-gray">
                                Databases
                            </div>
                            <div className="bg-background text-gray text-xl p-2">
                                SQLite Mongo
                                Firebase
                            </div>
                        </div>

                        <div className="bg-background border border-gray w-full">
                            <div className="bg-background text-white text-xl font-semibold p-2 border-b border-gray">
                                Frameworks
                            </div>
                            <div className="bg-background text-gray text-xl p-2">
                                React React-Native
                                Node.js
                            </div>
                        </div>
                    </div> 
                </div>                
            </div>

            <div className="w-full h-full flex flex-col 600:flex-row gap-10 600:gap-2 relative">
                <div className="w-full 1600:w-[90%] flex flex-col gap-10">
                    <h1 className="text-white font-bold 
                    text-[28px] 600:text-[22px] 700:text-[28px] 1000:text-[34px]
                    1300:text-[40px] 1700:text-[50px]
                    "><span className="text-primary">#</span>my-fun-facts</h1>

                    <div className="flex gap-2 flex-wrap">
                        <div className=" bg-background text-gray text-md 
                        border border-gray p-3 z-51">
                            I like winter more than summer    
                        </div>
                        <div className="bg-background text-gray text-[16px] 
                        font-semibold border border-gray p-3 z-51">
                            I like to take long drives   
                        </div>
                        <div className="bg-background text-gray text-[16px] 
                        font-semibold border border-gray p-3 z-51">
                            I like to travel to the north on my bike   
                        </div>
                        <div className="bg-background text-gray text-[16px] 
                        font-semibold border border-gray p-3 z-51">
                            I am a hardcore MCU fan 
                        </div>
                        <div className="bg-background text-gray text-[16px] 
                        font-semibold border border-gray p-3 z-51">
                            I prefer desi food over junk food   
                        </div>
                        <div className="bg-background text-gray text-[16px] 
                        font-semibold border border-gray p-3 z-51">
                            I am happily un-married   
                        </div>
                        <div className="bg-background text-gray text-[16px] 
                        font-semibold border border-gray p-3 z-51">
                            I don't like to exercise   
                        </div>
                    </div> 
                </div>
                 
            </div>
        </div>
    )
}

export default About