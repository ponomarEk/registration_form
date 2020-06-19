import React, { useState } from 'react';
import Email from '../email/index';
import Password from '../password/index';
import Gender from '../gender/index'
import './style.css';

function Container() {

    const initial = {
        password: '',
        email : '',
        validEmail : false,
        validPassword : false
    }
    const [ data, setData ] = useState(initial);
    const [ errorPass , setErrorPass ] = useState('');
    const [ errorEmail , setErrorEmail ] = useState('');
    const change = ( name, value, validType, bool ) =>{
        setData({
            ...data,
            [name]:value,
            [validType]:bool
        })
    }
    const submitClick = () => {
        if(data.validEmail && data.validPassword ){
            alert('Success!');
            setData(initial);
            setErrorPass('');
            setErrorEmail('');
        }else{
            alert('Fail!');
            if( !data.validPassword  && data.validEmail ){
                setErrorPass('Incorrect password !');
                setErrorEmail('');
            }
            if( !data.validEmail && data.validPassword ){
                setErrorEmail('Incorrect email !');
                setErrorPass('');
            }
            if( !data.validEmail && !data.validPassword ){
                setErrorEmail('Incorrect email !');
                setErrorPass('Incorrect password !');
            }
        }
    }
    return(
        <div className = 'container'>
            <h1>Sign up</h1>
            <Email change = { change } value = { data.email }  />
            <Password change = { change } value = { data.password }  />
            <Gender/>
            <button className = 'submit_button' onClick = { submitClick }>
                Submit
            </button>
            <span className = 'error'>
                { errorEmail }
            </span>
            <span className = 'error'>
                { errorPass }
            </span>
            
        </div>
    )
}

export default Container;