import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
