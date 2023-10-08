import './App.css';
import Navbar from './Component/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
// import Product from './Component/Product';
// import Fashion from './Assest/fashion.png';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />

          </Routes>
        </BrowserRouter>


      </div>
      {/* <section className='about-section'>
        <About />
      </section>
      <section className='Products_section'>
     
        <h2 className='heading_newProduct'>New products</h2>
        <div className='Products'>
        <Product Image="https://cdn.shopify.com/s/files/1/0665/2080/9769/files/philipp-arlt-8EyB_RvaWtY-unsplash.png?v=1696715824" Product="FLORIDA JACKET" productDes="Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised" Price="$100" />
        <Product Image="https://cdn.shopify.com/s/files/1/0665/2080/9769/files/zam-nungaray-acw3b7q6Ys0-unsplash.png?v=1696717080" Product="FLORIDA JACKET" productDes="Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised" Price="$100" />
        <Product Image={Fashion} Product="FLORIDA JACKET" productDes="Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised" Price="$100" />
        <Product Image="https://cdn.shopify.com/s/files/1/0665/2080/9769/files/philipp-arlt-8EyB_RvaWtY-unsplash.png?v=1696715824" Product="FLORIDA JACKET" productDes="Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised" Price="$100" />
        </div>
      </section>
      <section>
        <Contact />
      </section> */}
     

    </>
  );
}

export default App;
