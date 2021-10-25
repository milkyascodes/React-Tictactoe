import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './components/Game';
import Home from './components/Home';



function App() {
  return (

    <Router>
      <Switch>
          <Route path="/" exact>
            <Home exact component="home"/>
          </Route>
      </Switch>

      <Switch>
          <Route path="/game" exact>
            <Game/>
          </Route>
      </Switch>
    </Router>

  
  );
}

export default App;
