import React from 'react';

const ColorPicker = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'black', 'white', 'orange', 'pink', 'brown'];
    return (
        <div>
            <h1>Choose a color</h1>
            {colors.map(color=> <button key={colors} style={{ backgroundColor: color }} />)}

        </div>
    )       
}

function Pixel () {
    return 
        <div style={{ height: '20px', width: '20px', backgroundColor: 'lightGrey', margin: '1px' }} />
}

function Pixels () {
    const pixels = [];
    for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
            {pixels}
        </div>
    )
}

export default function PixelArt () {
    return (
        <div>
            <ColorPicker />
            <Pixels />
        </div>
    )
}