import React from 'react';

import '../styles.css';

const Input = ({ input ,  handleInput }) => {
    return(
        <div className="input">
            <label className="input_label">Enter binary number:</label>
            <input type="text" value = {input} onChange = {handleInput}/>
        </div>
    );
}

export default Input;