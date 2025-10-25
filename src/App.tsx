import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Homepage from './components/Homepage/Homepage'
import About from './components/About/About';
import Works from './components/Works/Works';
import MyContact from "./components/MyContact/MyContact"
import Loader from './components/Loader/Loader';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isLoading]);

  return (
    <BrowserRouter>
      {isLoading && (
          <div className="fixed inset-0 z-1000 flex items-center justify-center bg-background">
            <Loader onFinish={handleLoaderComplete} />
          </div>
        )}
      <div className={isLoading ? 'invisible' : ''}/>
      <Routes>
        <Route path="/" element={ <Homepage /> }/>
        <Route path="/aboutme" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<MyContact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
