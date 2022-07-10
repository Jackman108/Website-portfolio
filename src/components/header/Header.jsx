import React from 'react';
import './header.css'
import ME from '../../assets/ME.png'
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Eugene Korobov</h1>
                <h5 className="text-light">Frontend Developer </h5>
                <CTA/>
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Me"/>
                </div>

                <a href={'#contacts'} className="scroll__down">Scroll Dawn</a>
            </div>
        </header>
    )
}

export default Header;