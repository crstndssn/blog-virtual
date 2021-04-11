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
    //             history.push('/marthaceciliacetina/info');
    //         } else {
    //             history.push('/marthaceciliacetina');
    //         }
    //     })

    // })

    return (
        <div>
            <div>
                <Router>

                    <Navigation />

                    <Route exact path="/marthaceciliacetina" component={Info} />

                    <Route path="/marthaceciliacetina/Info" component={Info} />
                    <Route path="/marthaceciliacetina/login" component={Login} />
                    <Route path="/marthaceciliacetina/signup" component={Signup} />
                    <Route path="/marthaceciliacetina/posts" component={Posts} />
                    <Route path="/marthaceciliacetina/notifications" component={Notifications} />
                    <Route path="/marthaceciliacetina/reset" component={ResetPassword} />
                    
                </Router>
            </div>
        </div>
    )
}

export default Index
