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
    //             history.push('/fernando-rodriguez/info');
    //         } else {
    //             history.push('/fernando-rodriguez');
    //         }
    //     })

    // })

    return (
        <div>
            <div>
                <Router>

                    <Navigation />

                    <Route exact path="/fernando-rodriguez" component={Info} />

                    <Route path="/fernando-rodriguez/info" component={Info} />
                    <Route path="/fernando-rodriguez/login" component={Login} />
                    <Route path="/fernando-rodriguez/signup" component={Signup} />
                    <Route path="/fernando-rodriguez/posts" component={Posts} />
                    <Route path="/fernando-rodriguez/notifications" component={Notifications} />
                    <Route path="/fernando-rodriguez/reset" component={ResetPassword} />
                    
                </Router>
            </div>
        </div>
    )
}

export default Index
