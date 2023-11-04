import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import {Loader} from 'react-loaders';
import Cube from './Cube';
import './index.scss';
import Skills from './Skills';

const About = ()=>{
    
    const [letterClass , setLetterClass] = useState('text-animate');

    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15} />
                </h1>

                <p style={{fontSize: 16}}>
                Welcome to my corner of the web! I'm a passionate full-stack developer with a knack for crafting dynamic and user-centric web applications. I thrive on creating seamless, interactive online experiences. Whether it's architecting robust databases, implementing elegant user interfaces, or optimizing server performance, I'm dedicated to delivering solutions that not only meet your needs, but exceed your expectations.
                </p>
                <p style={{fontSize: 16}}>Let's collaborate and turn your digital visions into reality!</p>
            </div>

            <Cube />
            <Skills />
        </div>

        <Loader type="pacman" />
        </>
    )
}

export default About;