import './App.css';
import './static/CSS/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Homepage from './Components/Homepage.js'
import About from './Components/About.js'
import Background from './Components/Background.js'
import Skills from './Components/Skills.js'
import Experiences from './Components/Experiences.js'
import Contact from './Components/Contact.js'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about"  component={About}/>
          <Route path="/background"  component={Background}/>
          <Route path="/skills"  component={Skills}/>
          <Route path="/experiences"  component={Experiences}/>
          <Route path="/contact"  component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;