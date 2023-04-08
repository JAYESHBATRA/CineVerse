import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {SiHashnode,SiGeeksforgeeks} from "react-icons/si";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to Cine Verse, your ultimate hub for all things movies and TV shows! 
                Explore our comprehensive database of films and shows, complete with detailed information, 
                ratings, and reviews. Stay up-to-date with our release calendar, personalize your 
                recommendations, and join our vibrant community of fellow cinephiles. With 
                Cine Verse, you'll discover a world of cinematic wonders at your fingertips.
                </div>
                <div className="infoText">
                    Developed by Jayesh Batra
                </div>
                <div className="socialIcons">
                    <a className="icon" href="https://www.linkedin.com/in/jayesh-batra-in/" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a className="icon" href="https://github.com/JAYESHBATRA" target="_blank">
                        <BsGithub />
                    </a>
                    <a className="icon" href="https://auth.geeksforgeeks.org/user/jayeshbpmb7/practice" target="_blank">
                      <SiGeeksforgeeks/>
                    </a>
                    <a className="icon" href="https://jayeshbatra.hashnode.dev/" target="_blank">
                      <SiHashnode/>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;