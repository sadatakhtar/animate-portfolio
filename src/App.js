import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import Projects from './pages/projectsPage/Projects';
import NetflixPage from './pages/netflixPage/NetflixPage';
import StudentTrackerPage from './pages/studentTrackerPage/StudentTrackerPage'
import QuestionMarkPage from './pages/questionMarkPage/QuestionMarkPage';


function App() {
  return (
    <Router>
      <Switch>
         <Route  exact path="/" component={HomePage} />
         <Route path="/projects" component={Projects} />
         <Route path="/netflix" component={NetflixPage} />
         <Route path="/student" component={StudentTrackerPage} />
         <Route path="/question" component={QuestionMarkPage} />

      </Switch>

    </Router>
   
  );
}

export default App;
