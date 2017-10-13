import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ItemPage from './pages/ItemPage';
import ResumePage from './pages/ResumePage';
import CharacterPage from './pages/CharacterPage';
import Wrapper from './components/layout/Wrapper';

const baseUrl = process.env.PUBLIC_URL;

const Routes = () => (
  <Router>
    <div>
      <Route exact path={baseUrl + "/"} component={Home}/>
      <Route path={baseUrl + "/about"} component={About}/>
      <Route path={baseUrl + "/characters"} component={Characters}/>
    </div>
  </Router>
)

const Home = () => (
  <Wrapper>
    <ItemPage name='rod-of-wonder'/>
  </Wrapper>
)

const About = () => (
  <Wrapper>
    <ResumePage/>
  </Wrapper>
)

const Characters = ({match}) => (
  <Wrapper>
    <CharacterPage match={match}/>
  </Wrapper>
)

class App extends Component {
  render() {
    return (<Routes/>);
  }
}

export default App;
