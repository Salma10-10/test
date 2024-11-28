

import React from 'react';

interface MyButtonProps {
    text: string;
    onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
    return (
        <button onClick={onClick} data-testid="my-button">
            {text}
        </button>
    );
};

export default MyButton;
