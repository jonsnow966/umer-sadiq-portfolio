import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import Footer from "../Footer/Footer"

function Contactpage(){
    return(
        <div className="relative w-full min-h-screen flex flex-col items-center font-fira 
      bg-background overflow-hidden hide-scrollbar">
        <Header />
        <Sidebar /> 

        <main className="w-full 800:w-[75%] flex flex-col 
        pt-10 600:pt-[100px] 800:pt-[61px] p-5 pb-10 800:p-0 800:pb-40 
        overflow-hidden"> 
          {/* <Home /> */}
        </main>

        <footer className='sticky border-t border-gray 
        bottom-0 w-full h-fit py-5 flex justify-center items-center'>
          <Footer />
        </footer>
      </div>
    )
}

export default Contactpage