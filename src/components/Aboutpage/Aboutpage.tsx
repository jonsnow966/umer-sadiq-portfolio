import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import Footer from "../Footer/Footer"
import About from "../About/About"

function Aboutpage(){
    return(
        <div className="relative w-full min-h-screen flex flex-col items-center font-fira 
      bg-background overflow-hidden hide-scrollbar">
        <Header />
        <Sidebar /> 

        <main className="w-full 800:w-[75%] flex flex-col overflow-hidden
        pt-30 600:pt-[120px] 800:pt-[100px] p-5 pb-10 800:p-0 800:pb-40"> 
          <About />
        </main>

        <footer className="w-full h-fit flex flex-1 justify-center items-center
        overflow-y-auto border-t-2 border-gray">
          <Footer />
        </footer>
      </div>
    )
}

export default Aboutpage