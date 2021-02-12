import React from 'react'

function About() {
    
    return (
        <>
        <section id="desc" class="content d-flex align-items-center">
            <div class="container-fluid desc">
                <div class="row heading d-flex">
                <p>a few things about me</p>
                </div>

                <div class="row isi-desc">
                <div class="col-md-7">
                    <p>
                    I’m a boy born in Batam on 27th of April 2001. A proud Betawinese.
                    I like to socialize and pay a very close attention to my
                    surrondings. Interested in Web Development and Software
                    Engineering.
                    </p>
                </div>
                </div>

                <div class="row foot-quote d-flex">
                <div class="col-md-12">
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
