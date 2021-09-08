import React from 'react';
import './canvas.scss';

interface canvasProps {
    children: React.ReactNode;
}

const Canvas = (props: canvasProps) => {
    return <main className='canvas' >{
        props.children
    }</main>;
}

export default Canvas;