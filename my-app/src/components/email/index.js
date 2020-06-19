import React from 'react';
import './style.css'
const VALID_EMAIL = /^...+@..+\...+$/;

function Email(props) {
    let className = 'email';
    let value = props.value;
    if(VALID_EMAIL.test(value)){
        className += ' green';
    }else if(value === ''){
        className = 'email';
    }else{
        className += ' red';
    }
    const setEmail =  (e) => {
        if(className==='email green'){
            props.change('email', e.target.value, 'validEmail', true);
        }else{
            props.change('email', e.target.value, 'validEmail', false);
        }
    }
    
    return(
        <div className = 'emailDiv'>
            <form>
                <input className = { className }
                    type = 'text' 
                    value = { props.value } 
                    onChange = { setEmail }
                    placeholder = 'Email'
                />
            </form>
        </div>
    )
}

export default Email;