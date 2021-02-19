import asdos from './img/asdos.png'
import gomurojaah from './img/gomurojaah.png'
import coronow from './img/coronow.png'
import porto from './img/porto.png'

const Projects = () => {
    
    return (
    <section className="projects content d-flex justify-content-center align-items-center">
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center projects-container">
            <div className="row d-flex justify-content-center">
                <div className="col-md project-font">
                    projects
                </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card" style={{width: "18rem", marginTop:"8vh"}}>
                        <img className="card-img-top" src={gomurojaah} alt="GoMuroja'ah"/>
                        <div className="card-body">
                            <h5 className="card-title">GoMuroja'ah</h5>
                            <p className="card-text">
                            A web app that helps Qur'an's Hafidz and Hafidzhoh 
                            strengthen their qur'an recitation. Implemented using HTML, CSS, JS and Django.
                            </p>
                            <a href="https://gomurojaah.herokuapp.com" className="btn btn-primary">visit</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div className="card" style={{width: "18rem", marginTop:"8vh"}}>
                        <img className="card-img-top" src={coronow} alt="CoroNow"/>
                        <div className="card-body">
                            <h5 className="card-title">CoroNow</h5>
                            <p className="card-text">
                                CoroNow means showing anything relates to covid-19. Implented using HTML, CSS , JS and Django.
                            </p>
                            <a href="https://coronow2.herokuapp.com" className="btn btn-primary">visit</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center last-child">
                    <div className="card" style={{width: "18rem", marginTop:"8vh"}}>
                        <img className="card-img-top" src={porto} alt="Portofolio website"/>
                        <div className="card-body">
                            <h5 className="card-title">Portofolio Website</h5>
                            <p className="card-text">This exact website. Build using create-react-app and deployed to github pages.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
 
export default Projects;