
import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact'
import Shop from './pages/shop/Shop'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
