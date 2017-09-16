import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ItemPage from './containers/ItemPage';
import ResumePage from './containers/ResumePage';
import RepoLister from './components/RepoLister'
import Navbar from './components/Header/Navbar';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/rod-of-wonder" component={ItemSample}/>
    </div>
  </Router>
)

const ItemSample = () => (
  <div>
    <Navbar/>
    <ItemPage name='rod-of-wonder'/>
  </div>
)

const Home = () => (
  <div>
    <Navbar/>
    <h2>Home</h2>
    <RepoLister/>
  </div>
)

const About = () => (
  <div>
    <Navbar/>
    <h2>About</h2>
  </div>
)

const Resume = () => (
  <div>
    <Navbar/>
    <ResumePage/>
  </div>
)

const Topics = ({match}) => (
  <div>
    <Navbar/>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route
      exact
      path={match.url}
      render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({match}) => (
  <div>
    <Navbar/>
    <h3>{match.params.topicId}</h3>
  </div>
)

class App extends Component {
  render() {
    return (<Routes/>);
  }
}

export default App;
