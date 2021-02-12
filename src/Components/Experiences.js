import React from 'react'
import compfest from './img/logo_compfest.png'
import asdos from './img/asdos.png'
import ghat from './img/graduation-hat.png'
import programming from './img/programming.png'

function Experiences() {
    return (
        <section className="content experiences">
            <div id="experiences" className="col-12 no-gutters title">
                <p>e x p e r i e n c e s .</p>
            </div>

            <div className="container-fluid">
                <div className="row row-satu">
                <div className="col-md d-flex flex-column align-items-center justify-content-center">
                    <div className="row">
                    <img src={compfest} alt="" />
                    </div>
                    <div className="row">
                    <p>Digital Marketing Staff</p>
                    </div>
                    <div className="row m-20">
                    <p>at COMPFEST</p>
                    </div>
                </div>
                <div className="col-md d-flex flex-column align-items-center justify-content-center">
                    <div className="row">
                    <img src={asdos} alt="" />
                    </div>
                    <div className="row">
                    <p>Teaching Assistant</p>
                    </div>
                    <div className="row m-20">
                    <p>Foundation of Programming 1</p>
                    </div>
                </div>
                </div>

                <div className="row row-dua">
                <div className="col-md d-flex flex-column align-items-center justify-content-center">
                    <div className="row">
                    <img src={ghat} alt="" />
                    </div>
                    <div className="row">
                    <p>Liaison Officer Staff</p>
                    </div>
                    <div className="row m-20">
                    <p>at Wisuda Ganjil Fasilkom 2020</p>
                    </div>
                </div>

                <div className="col-md d-flex flex-column align-items-center justify-content-center">
                    <div className="row">
                    <img src={programming} alt="" />
                    </div>
                    <div className="row">
                    <p>Mentor</p>
                    </div>
                    <div className="row m-20">
                    <p>at Dasar-Dasar Pemrograman 0</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences
