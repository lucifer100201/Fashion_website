import React from 'react'
import './product.css';
const Product = (props) => {

    

return (
    <>
       
        <div class="main_grid">

            <div class="product-grid">
                <div class="Product_main">
                    <img class="product_img" src={props.Image} alt='' />
                    <span class="view_details"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <rect width="45" height="45" fill="#161615" />
                        <path d="M28.9959 29.1648C28.9995 24.0427 28.9811 19.5589 29 15C23.8819 15.0036 19.3859 15.0186 14.8347 15.0041C14.8291 16.3618 14.8272 17.4011 14.8221 18.7218C17.5043 18.7288 20.315 18.7218 22.6435 18.7221L14.3068 27.0585C13.8958 27.4698 13.8981 28.2202 14.3117 28.6341L15.3657 29.688C15.7796 30.1019 16.5303 30.1043 16.9414 29.6932L25.278 21.3568C25.2744 23.9613 25.2817 26.5655 25.2703 29.17C26.5249 29.1631 27.8909 29.1692 28.9959 29.1648Z" fill="white" />
                    </svg></span>
                </div>
                <div class="product_details">
                    <h2>{props.Product}</h2>
                    <p>{props.productDes}</p>
                    <p class="price">{props.Price}</p>
                </div>
            </div>
        </div>

    </>


)
}

export default Product;