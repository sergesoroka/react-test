import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link className='login-link' to='/login'>
          Login
        </Link>
      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
