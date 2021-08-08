import './App.css';
import { Login } from './views/Login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Marketplace } from './views/Marketplace/Marketplace';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Marketplace />
          </Route>

          <Route exact path={['/login']}>
            <Login />
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
