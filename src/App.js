// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import ResumeContainer from './containers/ResumeContainer';
import ContactContainer from './containers/ContactContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path = "/">
            <HomeContainer />
          </Route>
          <Route exact path = "/about">
            <AboutContainer />
          </Route>
          <Route exact path = "/projects">
            <ProjectsContainer />
          </Route>
          <Route exact path = "/resume">
            <ResumeContainer/>
          </Route>
          <Route exact path = "/contact">
            <ContactContainer/>
          </Route>
        </Switch>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
