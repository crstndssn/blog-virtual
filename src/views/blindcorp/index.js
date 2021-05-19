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
    //             history.push('/blindcorpdecolombia/info');
    //         } else {
    //             history.push('/blindcorpdecolombia');
    //         }
    //     })

    // })

    return (
        <div>
            <div>
                <Router>

                    <Navigation />

                    <Route exact path="/blindcorpdecolombia" component={Info} />

                    <Route path="/blindcorpdecolombia/info" component={Info} />
                    <Route path="/blindcorpdecolombia/login" component={Login} />
                    <Route path="/blindcorpdecolombia/signup" component={Signup} />
                    <Route path="/blindcorpdecolombia/posts" component={Posts} />
                    <Route path="/blindcorpdecolombia/notifications" component={Notifications} />
                    <Route path="/blindcorpdecolombia/reset" component={ResetPassword} />
                    
                </Router>
            </div>
        </div>
    )
}

export default Index
