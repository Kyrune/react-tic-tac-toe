import React from 'react';

const style = {
    background: '#464545',
    border: '2px solid black',
    fontSize: '30px',
    color: 'oldlace',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value, onClick}) => 
    (
        <button style={style} onClick={onClick}>
            {value}
        </button>
    );

export default Square;