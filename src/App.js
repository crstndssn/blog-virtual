
import './style/main.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

// views
import martha from './views/martha/index.js'
import vsp from './views/vsp/index.js'
import info from './views/vsp/Info'
import espacios from './views/espacios-concretos/index.js'
import blindcorp from './views/blindcorp/index.js'
import logisticored from './views/logisticored/index.js'
import redlogistico from './views/redlogistico/index.js'

import Admin from './views/Admin.js'

// BETA
import HomeBeta from './views/Home'
import UserBeta from './views/Home'
import Navigation from './components/Navigation'
import Login from './components/auth/Login'
import Reset from './components/auth/Reset'
import Signup from './components/auth/Signup'


import test from './views/test/index.js'

function App() {
  return (
    <div className="mb-10">

      <Router>

        {/* <Route exact path="/" component={info} />
        <Route path="/marthaceciliacetina" component={martha} />
        <Route path="/vsp" component={vsp} />
        <Route path="/espacios-concretos" component={espacios} />
        <Route path="/blindcorpdecolombia" component={blindcorp} />
        <Route path="/grupologisticored" component={logisticored} />
        <Route path="/redgrupologistico" component={redlogistico} />
        <Route path="/test" component={test}/> */}

        {/* beta */}

        <Navigation/>
        <Route path="/beta/home" component={HomeBeta}/>
        <Route path="/beta/user" component={UserBeta}/>
        <Route path="/beta/admin" component={Admin}/>
        <Route path="/beta/login" component={Login}/>
        <Route path="/beta/signup" component={Signup}/>
        <Route path="/beta/reset" component={Reset}/>

      </Router>
        
    </div>
  );
}

export default App;
