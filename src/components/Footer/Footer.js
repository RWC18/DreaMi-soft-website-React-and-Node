import React, {useState} from 'react';
import './Footer.scss'
import sendImg from '../../img/Path 56.svg';
import logo from '../../img/Logo_DM.svg';
import axios from 'axios';

const Footer = (props) => {
    const [error, setError] = useState(false);
    let userInputs = {
        name: '',
        email: '',
        message: '',
    };
    let changeHandler = (event) => {
        if (event.target.id === 'name'){
            userInputs = {
                ...userInputs,
                name: event.target.value
            };
        } else if (event.target.id === 'email'){
            userInputs = {
                ...userInputs,
                email: event.target.value
            };
        } else if (event.target.id === 'msg'){
            userInputs = {
                ...userInputs,
                message: event.target.value
            };
        }
    };
    let mailSend = (event) => {
        event.preventDefault();
        if (userInputs.message.length < 50 && userInputs.name.length < 2 && userInputs.email.length < 5){
            setError(true);
        } else  {
            setError(false);
            axios.post(`/api/send-email`, {
                name: userInputs.name,
                email: userInputs.email,
                message: userInputs.message
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
    return(
        <footer id="footer">
            <div className="contact_form">
                <h3>Contact us</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco.
                </p>
                <form onSubmit={mailSend}>
                    <input id="name" type="text" placeholder="Full name" defaultValue={userInputs.name} onChange={(event) => changeHandler(event)}/>
                    <input id="email" type="email" placeholder="Email" defaultValue={userInputs.email} onChange={(event) => changeHandler(event)}/>
                    <div className="textArea">
                     <textarea id="msg" spellCheck="false" placeholder="Message" defaultValue={userInputs.message} onChange={(event) => changeHandler(event)}>
                     </textarea>
                        <button>
                            <img alt="send" src={sendImg}/>
                        </button>
                    </div>
                </form>
                {error ? <p className="error">Something went wrong. Please check your name, email or message !!!</p>: null}
            </div>
            <div>
                <img className='logo' alt="logo" src={logo}/>
            </div>
        </footer>
    )
};


export default Footer;