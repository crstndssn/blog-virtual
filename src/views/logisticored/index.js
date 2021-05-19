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
    //             history.push('/grupologisticored/info');
    //         } else {
    //             history.push('/grupologisticored');
    //         }
    //     })

    // })

    return (
        <div>
            <div>
                <Router>

                    <Navigation />

                    <Route exact path="/grupologisticored" component={Info} />

                    <Route path="/grupologisticored/info" component={Info} />
                    <Route path="/grupologisticored/login" component={Login} />
                    <Route path="/grupologisticored/signup" component={Signup} />
                    <Route path="/grupologisticored/posts" component={Posts} />
                    <Route path="/grupologisticored/notifications" component={Notifications} />
                    <Route path="/grupologisticored/reset" component={ResetPassword} />
                    
                </Router>
            </div>
        </div>
    )
}

export default Index
