import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/banner.gif';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';
import pimage4 from '../images/p1.png';


function Product() {
    return (
        <div id='products'>
            <h1>PREVIOUS PROJECTS</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                looked up one of the more obscure Latin words, consectetur</p>
                <div className='a-container'>
                    <Productbox image={pimage4} title="Digital Calculator" />
                    <Productbox image={pimage3} title="Travel Webpage" />
                    <Productbox image={pimage2} title="Clinical Form" />  
                    <Productbox image={pimage1} title="Upcoming..." /> 
                </div>;
        </div>
    )
}

export default Product;
