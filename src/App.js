import './App.css';
import Header from './components/headerComponent/Header'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" component={HomePage} />
      </Switch>

    </Router>
   
  );
}

export default App;
