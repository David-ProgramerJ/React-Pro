import Header from './components/Header';
import History from './components/History';
import Family from './components/Family';
import Footer from './components/Footer';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){
  return(
    <div className='text-light bg-dark vh-200'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Family" element={<Family />} />
          <Route path="/History" element={<History />} />
        </Routes>
        <Footer />     
      </BrowserRouter>
    </div>
)
};


export default App;
