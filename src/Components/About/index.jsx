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

                <p>
                    Hello everyone, my name is sachin, i am aspiring full stack developer. I love making cool websites and projects. i am highly ananlytical and problem solver. I completed my bachelor's degree in Computer Applications in 2022.
                </p>
                <p>Customer satisfaction is always my priority. Contact me if you need cool and awesome website</p>
            </div>

            <Cube />
            <Skills />
        </div>

        <Loader type="pacman" />
        </>
    )
}

export default About;