import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import './landing.scss';

const Landing = () => {
    return <section className='landing-page' >
        <h1>THOUGHTS</h1>
        <p>Thoughts is a website where you can write all the ideas that come to your mind</p>
        <Link to='#'><Button btnBody='Write a thought' ></Button></Link>
    </section>;
}

export default Landing;