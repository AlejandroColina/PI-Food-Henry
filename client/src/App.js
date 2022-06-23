import './App.css';
import Nav from './componentes/Nav/index';
import Home from './componentes/Home/index';
import { Route } from 'react-router-dom';
import Details from './componentes/Details';
import Create from './componentes/Create/index';
import InitialPage from './componentes/LandingPage';
import Error from './componentes/Error'
import { Switch } from 'react-router-dom';
import Favorites from './componentes/Favorites/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home'>
          <Nav />
          <Home />
        </Route>
        <Route exact path='/' component={InitialPage} />
        <Route exact path='/createrecipe' component={Create} />
        <Route exact path='/detailrecipe/:id' component={Details} />
        <Route exact path='/favorites' component={Favorites} />
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
