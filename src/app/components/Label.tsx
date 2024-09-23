import React from 'react';

interface LabelProps {
    text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
    return (
        <div style={{ fontFamily: "sans-serif", fontWeight: "bold", padding: "13px", margin: "0" }}>
            <label style={{ color: "black" }}>
                {text}
            </label>
        </div>
    );
};

export default Label;