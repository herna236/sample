import React, { useState } from 'react';

const ColorComponent = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState('white'); 

    const colors = ['grey', 'blue', 'pink', 'orange', 'red', 'green'];

    const changeColorRandomly = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setCurrentColorIndex(randomIndex);
    };

    const [isHovered, setIsHovered] = useState(false); // State to track hover state

    return (
        <div style={{ backgroundColor: colors[currentColorIndex], padding: '20px', textAlign: 'center' }}>
            <h1
                style={{ color: isHovered ? 'yellow' : 'black' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Random Color Example
            </h1>
            <p>Current Color: {colors[currentColorIndex]}</p>
            <button onClick={changeColorRandomly}>Change Color Randomly</button>
        </div>
    );
};

export default ColorComponent;

