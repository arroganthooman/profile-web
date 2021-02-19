import React from 'react'
import python from './img/python.png'
import java from './img/java.png'
import brain from './img/brain.png'
import lightbulb from './img/light-bulb.png'
import {Link} from 'react-router-dom'
import javascript from './img/javascript.png'
import django from './img/django.png'
import iconReact from './img/react.png'

function Skills() {
    return (
        <section id="skills" className="content skills">
            <div className="container">
                <div className="row">
                <div className="col-md-4 title">
                    <p>skills.</p>
                </div>
                <div className="col-md-8">
                    <div className="row">
                    <div className="col-md-12 skills-icon">
                        <img src={python} alt="" />
                        <img src={java} alt="" />
                        <img src={javascript} alt="" />
                        <img src={django} alt="" />
                        <img src={iconReact} alt="" />

                        
                    </div>
                    <div className="col-md-12 skills-desc">
                        <p>
                        I can code in Python and Java fluently. I'm also learning web development framework like React.js for front-end and Django for the back-end. To see projects i've worked on, click 
                        <span> </span>
                        <Link to="/projects">
                         here
                        </Link>.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
