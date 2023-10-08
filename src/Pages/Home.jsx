import React from 'react'
import './home.css';
import boyImage from '../Assest/boyPic.svg'
import arrowImg from '../Assest/arrowImg.svg';
import Product from '../Component/Product';
import Fashion from '../Assest/fashion.png';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <section className='homePage'>
        <div className='s-bannerColor'>
          <img src={boyImage} alt='' />
        </div>
        <h1 className='s-bannerTitle freshTitle'>Fresh<br /><span className='s-bannerTitleYear'>2022</span><br /><span className='s-lookTitle'>Look</span></h1>

       <ul className='s-arrowImg'> 
        <li>See more</li>
        <li><img className='seeMoreIcon' src={arrowImg} alt=' ' /></li>
       </ul>
      </section>
      <section className='about-section'>
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
      <section className='contact_section'>
        <Contact />
      </section>


    
      
    </>
    
  )
}

export default Home
