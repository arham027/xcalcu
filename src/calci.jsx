import React, { useState } from 'react';

function Calci() {
    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('0');

    const buttons = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '=', 'AC', 'DE'
    ];

    const handleClick = (value) => {
        if (value === '=') {
            // Evaluate the expression in inputValue and update output
            setOutput(eval(inputValue));
            setInputValue(''); // Clear input after calculation
        } else if (value === 'AC') {
            setOutput('0');
            setInputValue('');
        } else if (value === 'DE') {
            setInputValue(inputValue.slice(0, -1));
        } else {
            // Append the value to the input
            setInputValue(inputValue + value);
        }
    };

    return (
        <div>
            <h1>Calculator</h1>
            <input type="text" value={inputValue} readOnly />
            <input type="text" value={output} readOnly style={{
                border:'none'
            }}/>
            {buttons.map((ele, idx) => (
                <button key={idx} onClick={() => handleClick(ele)}>{ele}</button>
            ))}
        </div>
    );
}

export default Calci;