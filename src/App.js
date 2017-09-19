import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ItemPage from './containers/ItemPage';
import ResumePage from './containers/ResumePage';
import Navbar from './components/Header/Navbar';
import CharacterPage from './containers/CharacterPage';

const baseUrl=process.env.PUBLIC_URL;

const Routes = () => (
  <Router>
    <div>
      <Route exact path={baseUrl+"/"} component={Home}/>
      <Route path={baseUrl+"/about"} component={About}/>
      <Route path={baseUrl+"/characters"} component={Characters}/>
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
    <CharacterPage match={match}/>
  </div>
)


class App extends Component {
  render() {
    return (<Routes/>);
  }
}

export default App;
