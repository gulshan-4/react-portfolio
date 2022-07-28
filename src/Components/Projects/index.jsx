import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import MSimage1 from '../../assets/images/Project imgs/Mobile Store1.png'
import MSimage2 from '../../assets/images/Project imgs/Mobile store 5.png'
import MSimage3 from '../../assets/images/Project imgs/Mobile Store2.png'
import MSimage4 from '../../assets/images/Project imgs/Mobile Store3.png'
import MSimage5 from '../../assets/images/Project imgs/Mobile Store4.png'
import TaskManImage from '../../assets/images/Project imgs/Task Manager.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye , faXmark } from '@fortawesome/free-solid-svg-icons';

const Projects = ()=>{
    const [letterClass , setLetterClass] = useState('text-animate');
    const projectsRef = useRef(null)
    const imgRef = useRef(null)

    useEffect(()=>{
        setTimeout(()=>{
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const projects = [
        {
            projectName : 'Mobile store - E-commerce shop',
            projectImage: [MSimage2,MSimage1,MSimage3,MSimage4,MSimage5],
            projectLink: 'https://github.com/00sachin00/Mobile-Store-project'
        },
        {
            projectName : 'Task Manager - Chrome Extension',
            projectImage: [TaskManImage],
            projectLink: 'https://github.com/00sachin00/Taskman---To-Do-list'
        }
    ]

    const showImage = (e)=>{
        const imgSrc = e.currentTarget.querySelector('img').src
        imgRef.current.src = imgSrc
        if(document.querySelector('.img-cont').style.display === 'block'){
            document.querySelector('.img-cont').style.display = 'none'
        }else{
            document.querySelector('.img-cont').style.display = 'block'
        }
        
    }
    const closeImage = ()=>{
        document.querySelector('.img-cont').style.display = 'none'
    }

    return (
        <>
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P','r','o','j','e','c','t','s']}
                    idx={15} />
                </h1>
                <p>
                    Projects made by me
                </p>
                <div ref={projectsRef} className="projects" id='projects' >
                    {
                        projects.map((project, i)=>{
                            return (<div key={i} className="project" onClick={showImage}>
                                <div className="bg"></div>
                                <h1>{project.projectName}</h1>
                                {/* <img src={project.projectImage} alt="img" /> */}
                                {
                                    project.projectImage.map((img)=>{
                                        return (<img src={img} alt="img" />)
                                    })
                                }
                                <div className="btn-bar">
                                    <a href={project.projectLink} target='_blank' rel='noreferrer'>
                                        Code&nbsp;
                                        <FontAwesomeIcon style={{'color':'white'}} icon={faGithub} />
                                    </a>
                                    <a onClick={showImage} href target='_black' className="view-btn">
                                     View&nbsp;
                                     <FontAwesomeIcon style={{'color':'rgba(0, 0, 0, 0.486)', 'fontSize':'14px'}} icon={faEye} />
                                    </a>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className="img-cont">
                <img ref={imgRef} src='' alt="" />
                <FontAwesomeIcon onClick={closeImage} className='close-img' icon={faXmark} />
            </div>
        </div>
        </>
    )
}
export default Projects;