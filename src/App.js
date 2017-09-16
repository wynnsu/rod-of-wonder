import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ItemPage from './containers/ItemPage';
import ResumePage from './containers/ResumePage';
import Navbar from './components/Header/Navbar';
import CharacterPage from './containers/CharacterPage';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/characters" component={Characters}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <Navbar/>
    <ItemPage name='rod-of-wonder'/>
  </div>
)

const About = () => (
  <div>
    <Navbar/>
    <ResumePage/>
  </div>
)

const Characters = ({match}) => (
  <div>
    <Navbar/>
    <h2>Characters</h2>
    <ul>
      <li>
        <Link to={`${match.url}/sully-lightfoot`}>
          Sully Lightfoot
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/knot`}>
          Knot
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/gear`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:characterId`} component={Character}/>
    <Route
      exact
      path={match.url}
      render={() => (
      <h3>Please select a character.</h3>
    )}/>
  </div>
)

const Character = ({match}) => (
  <div>
    {match.params.characterId === 'sully-lightfoot'
      ? <CharacterPage/>
      : <h3>{match.params.characterId}</h3>}
  </div>
)

class App extends Component {
  render() {
    return (<Routes/>);
  }
}

export default App;
