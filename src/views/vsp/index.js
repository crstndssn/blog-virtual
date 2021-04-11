import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'


import Navigation from './Navigation'
import Info from './Info'
import Login from './Login'
import Signup from './Signup'
import Posts from './Posts'
import Notifications from './Notifications'
import ResetPassword from './ResetPassword'

const Index = () => {


    // useEffect(() => {

    //     auth.onAuthStateChanged((user) => {

    //         if (user) {
    //             history.push('/vsp/info');
    //         } else {
    //             history.push('/vsp');
    //         }
    //     })

    // })

    return (
        <div>
            <div>
                <Router>

                    <Navigation />

                    <Route exact path="/vsp" component={Info} />

                    <Route path="/vsp/info" component={Info} />
                    <Route path="/vsp/login" component={Login} />
                    <Route path="/vsp/signup" component={Signup} />
                    <Route path="/vsp/posts" component={Posts} />
                    <Route path="/vsp/notifications" component={Notifications} />
                    <Route path="/vsp/reset" component={ResetPassword} />
                    
                </Router>
            </div>
        </div>
    )
}

export default Index
