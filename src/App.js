import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
