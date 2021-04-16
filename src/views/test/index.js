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
    //             history.push('/test/info');
    //         } else {
    //             history.push('/test');
    //         }
    //     })

    // })

    return (
        <div>
            <div>
                <Router>

                    <Navigation />

                    <Route exact path="/test" component={Info} />

                    <Route path="/test/info" component={Info} />
                    <Route path="/test/login" component={Login} />
                    <Route path="/test/signup" component={Signup} />
                    <Route path="/test/posts" component={Posts} />
                    <Route path="/test/notifications" component={Notifications} />
                    <Route path="/test/reset" component={ResetPassword} />
                    
                </Router>
            </div>
        </div>
    )
}

export default Index
