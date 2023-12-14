

import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom' 
import Home from './Pages/Home/Home';
import MoreHotel from './Pages/MoreHotel/MoreHotel';
import HotelDetail from './Pages/HotelDetail/HotelDetail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/morehotel' element={<MoreHotel/>}/>
      <Route path='/hoteldetail' element={<HotelDetail/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
