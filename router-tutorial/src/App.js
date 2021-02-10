import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles';


const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route component={Home} path="/" exact={true} />
        <Route component={About} path={['/about', '/info']} />
        <Route component={Profiles} path="/profiles" />
        <Route component={HistorySample} path="/history" />
        <Route render={({ location }) => (<div><h2>이 페이지는 존재하지 않습니다:</h2><p>{location.pathname}</p></div>)} />
      </Switch>
    </div>
  );
};

export default App;