import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg'
import bars from '../../assets/bars.png';

function Header() {

    function handleNavigation() {
        console.log('handleNavigation');
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <div className="topnav-container">
            <div class="topnav" id="myTopnav">
                <div class="topnav-wrapper">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <a href="javascript:void(0);" className="icon" onClick={handleNavigation}>
                            <img src={bars} alt="bars" />
                        </a>
                        <div>
                            <a href="#news">News</a>
                            <a href="#contact">Contact</a>
                            <a href="#about">About</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;
