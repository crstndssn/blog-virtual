
import './style/main.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

// views
import martha from './views/martha/index.js'
import vsp from './views/vsp/index.js'
import info from './views/vsp/Info'


function App() {
  return (
    <div className="mb-10">

      <Router>

        <Route exact path="/" component={info}/>
        <Route path="/marthaceciliacetina" component={martha}/>
        <Route path="/vsp" component={vsp}/>


      </Router>
        
    </div>
  );
}

export default App;
