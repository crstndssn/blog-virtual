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
    //             history.push('/espacios-concretos/info');
    //         } else {
    //             history.push('/espacios-concretos');
    //         }
    //     })

    // })

    return (
        <div>
            <div>
                <Router>

                    <Navigation />

                    <Route exact path="/espacios-concretos" component={Info} />

                    <Route path="/espacios-concretos/info" component={Info} />
                    <Route path="/espacios-concretos/login" component={Login} />
                    <Route path="/espacios-concretos/signup" component={Signup} />
                    <Route path="/espacios-concretos/posts" component={Posts} />
                    <Route path="/espacios-concretos/notifications" component={Notifications} />
                    <Route path="/espacios-concretos/reset" component={ResetPassword} />
                    
                </Router>
            </div>
        </div>
    )
}

export default Index
