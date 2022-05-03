import './App.css';
import Nav from './componentes/Nav/index';
import Home from './componentes/Home/index';
import { Route } from 'react-router-dom';
import Details from './componentes/Details';
import Create from './componentes/Create/index';
import InitialPage from './componentes/LandingPage';
import Error from './componentes/Error'
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home'>
          <Nav />
          <Home />
        </Route>
        <Route exact path='/' component={InitialPage} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/detail/:id' component={Details} />
        <Route path='*' component={Error} />
        <Nav />
      </Switch>
    </div>
  );
}

export default App;

/*
<Route path = '/home'>
  <Nav>  
  <Home>
<Route>



        <Route exact path='/home' component={Home} />


*/
