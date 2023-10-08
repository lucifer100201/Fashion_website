import React, { useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import MenuItems from './MenuItems';
import dTruck from '../Assest/truck.svg';
import FacebookIcon from '../Assest/facebook.svg';
import LinkedInIcon from '../Assest/linkedin.svg';
import TwitterIcon from '../Assest/twitter.svg';
import InstagramIcon from '../Assest/insta.svg';


const Item = ({ item }) => {
    const [showChilds, setShowChilds] = useState(false);



    const getHeading = () => {
        if (item.type === "link") {
            return (
                <Link to={item.url} className={item.cName}>
                    {item.name}
                </Link>
            );
        } else {
            return (
                <>
                    <div className="s-ourProduct" onClick={() => {
                        setShowChilds(!showChilds);
                    }}>
                        {item.name}
                    </div>
                </>
            );
        }
    }

    return (
        <li key={item.id}>
            {getHeading()}
            {showChilds && item.child && (
                <ul className="sub-menu">
                    {item.child.map((subItem) => (
                        <li key={subItem.id} >
                            <Link to={subItem.sub_url} className={subItem.sub_cName}>
                                {subItem.child_pName}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

const SocialMediaIcons = (props) => {
    return (
        <ul className='s-icons'>
            {props.icons.map((icon, index) => (
                <li key={index}>
                    <img src={icon} alt="" />
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {

    const socialMediaIcons = [FacebookIcon, LinkedInIcon, TwitterIcon, InstagramIcon];
    const navigate = useNavigate(); 

    return (
        <>
            <div className='s-Header'>
            <div className='s-colorHeader'>
                <header className='s-topHeader'>

                    <ul className='s-freePolicy'>

                        <li><img src={dTruck} alt='' /></li>
                        <li>Free Delivery</li>
                        <li>|</li>
                        <li>Return Policy</li>

                    </ul>



                    <ul className='s-rNavbar'>
                        <div className='s-login-folow'>
                            <span>Login</span>
                            <span>Follow Us</span>

                        </div>

                        <SocialMediaIcons icons={socialMediaIcons} />

                    </ul>


                </header>
                </div>
            </div>
            <header className='s-sHeader'>
                <button onClick={()=>navigate("/")}>ShopKart</button>
                <ul className='s-wishlist'>
                    <li><b>WISHLIST()</b></li>
                    <li><b>BAG()</b></li>

                </ul>
            </header>
            <nav className='s-navbar'>


                <ul className='s-navbar-list'>
                    {MenuItems.map((item, index) => {
                        return (
                            <Item item={item} key={index} />
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
