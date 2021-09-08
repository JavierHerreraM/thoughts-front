import React from 'react';
import Button from '../../components/button/Button';
import './landing.scss';

const Landing = () => {
    return <section className='landing-page' >
        <h1>THOUGHTS</h1>
        <p>Thoughts is a website where you can write all the ideas that come to your mind</p>
        <Button btnBody='Write a thought' />
    </section>;
}

export default Landing;