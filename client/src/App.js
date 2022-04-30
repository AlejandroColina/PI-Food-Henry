import './App.css';
import Nav from './componentes/Nav/index';
import Home from './componentes/Home/index';
import { Route } from 'react-router-dom';
import Details from './componentes/Details';
import Create from './componentes/Create/index';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path='/home' component={Home} />
      <Route path='/detail/:id' component={Details} />
      <Route path='/create' component={Create} />
    </div>
  );
}

export default App;
