import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ItemPage from './containers/ItemPage';
import ResumePage from './containers/ResumePage';
import Navbar from './components/Header/Navbar';
import CharacterPage from './containers/CharacterPage';
import Footer from './components/Footer/Footer';

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
  <section>
    <Navbar/>
    <ItemPage name='rod-of-wonder'/>
    <Footer />
  </section>
)

const About = () => (
  <section>
    <Navbar/>
    <ResumePage/>
    <Footer />
  </section>
)

const Characters = ({match}) => (
  <section>
    <Navbar/>
    <CharacterPage match={match}/>
    <Footer />
  </section>
)


class App extends Component {
  render() {
    return (<Routes/>);
  }
}

export default App;
