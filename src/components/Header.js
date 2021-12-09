import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h3>Hello, Welcome to my Portfolio</h3><br />
                <h1><span>I'M</span> ARNULFO<br />MISAGAL</h1><br /><br />
                <p className='details'>I'm currently taking a course of KODEGO as Full stack Developer <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className='header-btns'>

                    <a target="_blcnk" href='https://drive.google.com/file/d/1kXFpnIYZtvUADQXrd4Spr4lSZDujjVT3/view?usp=sharing' className='header-btn'><i class="bi bi-download"> Resume</i></a>      
                </div>
            </div>
        </div>
    )
}

export default Header;
