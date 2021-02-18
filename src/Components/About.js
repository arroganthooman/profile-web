import React from 'react'

function About() {
    
    return (
        <>
        <section id="desc" className="content d-flex align-items-center">
            <div className="container-fluid desc">
                <div className="row heading d-flex">
                <p>a few things about me</p>
                </div>

                <div className="row isi-desc">
                <div className="col-md-7">
                    <p>
                    I’m a boy born in Batam on 27th of April 2001. A proud Betawinese.
                    I like to socialize and pay a very close attention to my
                    surrondings. Interested in Web Development and Software
                    Engineering.
                    </p>
                </div>
                </div>

                <div className="row foot-quote d-flex">
                <div className="col-md-12">
                    <p>
                    "don’t live with the past, <br />instead live with them and move
                    forward."
                    </p>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About
