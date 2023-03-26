import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Component/CartCheckout/Checkout';
import CartPage from './Component/CartPage.jsx/CartPage';
import Footer from './Component/CommonComponet/Footer/Footer';
import AppBar from './Component/CommonComponet/WeBar/AppBar/AppBar';
import ImageSlide from './Component/CommonComponet/WeBar/AppBar/ImageSlide';

import HomePages from './Component/HomePage/HomePages';


function App() {



  return (
    <div className="App">

      <Routes>

        <Route path='/'
          element={<Box>
          <AppBar/>
          <ImageSlide/>
          <HomePages/> 
          <Footer/>
          </Box>}>  
          </Route>
    
        <Route path='/cartpage'
         element={<Box> <AppBar/><CartPage/><Footer/></Box>}>
        </Route>   
        <Route path='/checkout'
         element={<Box> <AppBar/><Checkout/><Footer/></Box>}></Route>
      </Routes>
    </div>
  );
}

export default App;
