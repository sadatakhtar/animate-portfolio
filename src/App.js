import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import Projects from './pages/projectsPage/Projects';
import NetflixPage from './pages/netflixPage/NetflixPage';


function App() {
  return (
    <Router>
      <Switch>
         <Route  exact path="/" component={HomePage} />
         <Route path="/projects" component={Projects} />
         <Route path="/netflix" component={NetflixPage} />

      </Switch>

    </Router>
   
  );
}

export default App;
