
import './style/main.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

// components
import Navigation from './components/Navigation'

// views
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import Posts from './views/Posts'
import Notifications from './views/Notifications'
import ResetPassword from './views/ResetPassword'


function App() {
  return (
    <div className="mb-10">

      <Router>

        <Navigation />

        <Route path="/marthaceciliacetina" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/notifications" component={Notifications}/>
        <Route path="/reset" component={ResetPassword}/>

      </Router>
        
    </div>
  );
}

export default App;
