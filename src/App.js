import React  , {useState , useEffect}from 'react';

import './styles.css';
import  logo from './images/Group 1.png'

import Input from './components/Input';
import Output from './components/Output'; 

const App = () => {
    const [input , setInput] = useState('');
    const [convertedInput , setConvertedInput] = useState(0); 

    let regEx = /^[0-1\b]+$/

    const handleInput = (e) => { 
        if((e.target.value === ''  || regEx.test(e.target.value)) && e.target.value.length <= 12){  
        setInput(e.target.value); 
        } 
    };


    useEffect( () => {
        setConvertedInput(parseInt(input , 2))
    } , [input]
    )
    
    const Alert = () => {
        console.log(input);
    }

    return(
        <div className = 'conversion'>
            <img className = 'logo' src = {logo} alt = 'B2D_Logo' ></img>  
            {Alert}
            <Input  input = {input} handleInput = {handleInput} />
            <Output  decimalValue = {convertedInput} />
        </div>
    );
};

export default App;