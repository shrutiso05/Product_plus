import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
            <div className="text">
                Founded in 2015, Boat Headphones is dedicated to delivering premium 
                audio experiences to music enthusiasts worldwide. 
                mission is to blend cutting-edge technology with stylish design, ensuring every user enjoys unparalleled sound quality.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow /><div className="text">
                            Kayaloram Rd, Punnamada, 
                            KottankuLangara, Bengaluru, 63309
                        </div>
                    </div>
                    <div className="c-item"><FaMobileAlt /><div className="text">
                        Phone: 1800 2222 4545
                        </div>
                    </div>
            <div className="c-item"><FaEnvelope /><div className="text">
                Email: productplus@gmail.com
                </div>
            </div>
        </div>
            
            <div className="col"><div className="title">Categories</div>
            <div className="text">Categories</div>
            <div className="text">Headphones</div>
            <div className="text">Smart Watches</div>
            <div className="text">Bluetooth Speakers</div>
            <div className="text">Wireless Earbuds</div>
            <div className="text">Home Theaters</div>
            <div className="text">Projectors</div>
            </div>
            <div className="col"><div className="title">Pages</div>
            <div className="text">Home</div>
            <div className="text">About</div>
            <div className="text">Privacy Policy</div>
            <div className="text">Returns</div>
            <div className="text">Terms and conditions</div>
            <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    PRODUCTSPLUS.2024 CREATED BY JS DEV. E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment} alt=""/>
            </div>
        </div>
    </footer>;
};

export default Footer;
