import React from 'react';
import aboutimage from '../images/upcoming.png';

function about() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING PROJECTS</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority 
                    have suffered alteration in some form, by injected humour, or randomised words 
                    which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                     you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                     All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                     making this the first true generator on the Internet. </p>
                     <button className='about-button'>Read more</button>
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt='' />
            </div>
        </div>
    )
}

export default about;
