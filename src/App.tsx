import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative w-full min-h-screen 
            flex flex-col items-center 
            font-fira 
            bg-background 
            overflow-hidden hide-scrollbar">
              <Header />
              <Sidebar /> 
              <main className="w-full 800:w-[75%] flex flex-col 
              pt-10 600:pt-[100px] 800:pt-[61px] p-5 800:p-0
              overflow-hidden"> 
                <Home />
              </main>
            </div>
          }
        />
        {/* <Route path="/cardDetails/:title/:id" element={<CardDetails />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
