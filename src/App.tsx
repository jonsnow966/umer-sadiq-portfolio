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
            <div className="w-screen h-screen bg-background font-fira flex flex-col items-center">
              <Header />
              <Sidebar />
              <Home />
            </div>
          }
        />
        {/* <Route path="/cardDetails/:title/:id" element={<CardDetails />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
