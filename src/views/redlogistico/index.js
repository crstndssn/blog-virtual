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
    //             history.push('/redgrupologistico/info');
    //         } else {
    //             history.push('/redgrupologistico');
    //         }
    //     })

    // })

    return (
        <div>
            <div>
                <Router>

                    <Navigation />

                    <Route exact path="/redgrupologistico" component={Info} />

                    <Route path="/redgrupologistico/info" component={Info} />
                    <Route path="/redgrupologistico/login" component={Login} />
                    <Route path="/redgrupologistico/signup" component={Signup} />
                    <Route path="/redgrupologistico/posts" component={Posts} />
                    <Route path="/redgrupologistico/notifications" component={Notifications} />
                    <Route path="/redgrupologistico/reset" component={ResetPassword} />
                    
                </Router>
            </div>
        </div>
    )
}

export default Index
