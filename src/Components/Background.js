import React from 'react'
import ui from './img/ui.png'
import sma38 from './img/sma-38.png'
import smp98 from './img/smp98.png'


function Background() {
    return (
        <>
        <section id="background" className="content edu d-flex align-items-center">
            <div className="container">
                <div className="row d-flex justify-content-center title">
                <p>educational background.</p>
                </div>
                <div className="row isi-edu">
                <div className="col-md-4 flex kasih-border">
                    <div className="row">
                    <img src={ui} alt="Universitas Indonesia" />
                    </div>
                    <div className="row d-flex justify-content-center">
                    <p style={{textAlign: 'center'}}>Universitas Indonesia</p>
                    </div>
                    <div className="row">
                    <p>2019 - Now</p>
                    </div>
                </div>
                <div className="col-md-4 flex kasih-border">
                    <div className="row">
                    <img src={sma38} alt="SMAN 38 Jakarta" />
                    </div>
                    <div className="row">
                    <p>SMAN 38 Jakarta</p>
                    </div>
                    <div className="row">
                    <p>2016 - 2019</p>
                    </div>
                </div>
                <div className="col-md-4 flex">
                    <div className="row">
                    <img src={smp98} alt="SMPN 98 Jakarta" />
                    </div>
                    <div className="row">
                    <p>SMPN 98 Jakarta</p>
                    </div>
                    <div className="row">
                    <p>2013 - 2016</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Background
