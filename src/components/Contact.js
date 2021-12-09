import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h1>Send your suggestion  here</h1>
            <form>
                <input type='text' placeholder='First Name' required='required' />
                <input type='text' placeholder='Middle Name' required='required' />
                <input type='text' placeholder='Last Name' required='required' />
                <input type='email' placeholder='Type your E-mail' required='required' />
                <textarea placeholder='Write Here...' required='required' ></textarea>
                <input type='submit' value='SEND' />
            </form>
        </div>
    )
}

export default Contact;
