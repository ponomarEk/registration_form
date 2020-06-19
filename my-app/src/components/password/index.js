import React from 'react';
import './style.css'
const VALID_PASSWORD = /^.{6,}$/;

function Password(props) {

        let className = 'password';
        let value = props.value;
        if(VALID_PASSWORD.test(value)){
            className += ' green';
        }else if(value === ''){
            className = 'password'
    
        }else{
            className += ' red'

        }
        const setPassword = (e) => {
            if(className==='password green'){
                props.change('password', e.target.value, 'validPassword', true);
            }else{
                props.change('password', e.target.value, 'validPassword', false);
            }        
        }
   
    return(
        <div className = 'passwordDiv'>
                <form>
                    <input className = {className}
                    type = 'password' 
                    value = { props.value } 
                    onChange = { setPassword }
                    placeholder = 'Password'
                />
                </form>
        </div>
    )
}

export default Password;