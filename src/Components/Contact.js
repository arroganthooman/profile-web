import React from 'react'
import twitter from './img/twitter.png'
import instagram from './img/instagram.png'
import facebook from './img/facebook.png'
import linkedin from './img/linkedin.png'
import whatsapp from './img/whatsapp-logo-variant.png'
import mail from './img/mail.png'

function Contact() {
    return (
        <section id="contact" className="content contact">
            <div className="container-fluid contact d-flex justify-content-center">
                <div className="row title">
                <p>Contact me through:</p>
                </div>
                <div className="container mt-5">
                <div className="row row-satu">
                    <div className="col-lg-4">
                    <img className="float-left" src={whatsapp} alt="whatsapp" />
                    <p>+62 87888893902</p>
                    </div>

                    <div className="col-lg-5">
                    <img className="float-left" src={mail} alt="e-mail" />
                    <p>fikriakmal453@gmail.com</p>
                    </div>
                </div>
                </div>

                <div className="container d-flex justify-content-center">
                <div className="row row-dua">
                    <p>Get in touch with me on:</p>
                </div>
                </div>

                <div className="container-fluid con-3">
                <a href="https://twitter.com/arroganthooman"><img src={twitter} alt="twitter" /></a>
                <a href="https://instagram.com/fikrii_akmal"><img src={instagram} alt="instagram" /></a>

                <a href="https://facebook.com/FikriAkmal10"><img src={facebook} alt="facebook" /></a>

                <a href="https://www.linkedin.com/in/fikriakmal/"><img src={linkedin}
                    alt="linkedin" /></a>
                </div>
            </div>
        </section>
    )
}

export default Contact
