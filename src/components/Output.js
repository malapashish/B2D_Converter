import React from 'react';

import '../styles.css';

const Output = ({decimalValue}) => {
    return(
        <div className = 'output' >
            Decimal: 
            {isNaN(decimalValue) ? '' : decimalValue}
        </div>
    )
}

export default Output;