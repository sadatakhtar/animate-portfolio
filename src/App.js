import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import Projects from './pages/projectsPage/Projects';


function App() {
  return (
    <Router>
      <Switch>
         <Route  exact path="/" component={HomePage} />
         <Route path="/projects" component={Projects} />
      </Switch>

    </Router>
   
  );
}

export default App;
