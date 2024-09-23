import React from 'react';

interface SquareProps {
    color: string;
}

const Square: React.FC<SquareProps> = ({ color }) => {
    return (
        <div style={{ backgroundColor: color, height: '150px' }}>
        </div>
    );
};

export default Square;