import React from 'react'
import python from './img/python.png'
import java from './img/java.png'
import brain from './img/brain.png'
import lightbulb from './img/light-bulb.png'
import {Link} from 'react-router-dom'

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
                        <img src={brain} alt="" />
                        <img src={lightbulb} alt="" />
                        
                    </div>
                    <div className="col-md-12 skills-desc">
                        <p>
                        I can code in Python and Java. These also made my critical
                        thinking and problem solving gets sharper. To see projects i've worked on, click 
                        <Link to="/projects">
                        <a> here</a>
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
