import React, { useState } from 'react';
import ChangeButton from './ChangeButton';
import HoverContainer from './HoverContainer';

const ColorComponent = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(null); 

    const colors = ['grey', 'blue', 'pink', 'orange', 'red', 'green'];

    const changeColorRandomly = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setCurrentColorIndex(randomIndex);
    };
    
    return (
        <div style={{ backgroundColor: currentColorIndex !== null ? colors[currentColorIndex]: 'white', padding: '20px', textAlign: 'center' }}>
            <HoverContainer />
            <p>Current Color: {colors[currentColorIndex]}</p>
            <ChangeButton changeColorRandomly={changeColorRandomly}/>
        </div>
    );
};

export default ColorComponent;

