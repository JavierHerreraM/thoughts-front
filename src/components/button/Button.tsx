import React from 'react';
import './button.scss';

interface buttonProps {
    btnBody: React.ReactNode,
}

const Button = (props: buttonProps) => {
    const { btnBody } = props;
    return <button type='button' className='button'>
        {btnBody}
    </button>;
}

export default Button;