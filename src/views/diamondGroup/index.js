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
    //             history.push('/diamondgroupamd/info');
    //         } else {
    //             history.push('/diamondgroupamd');
    //         }
    //     })

    // })

    return (
        <div>
            <div>
                <Router>

                    <Navigation />

                    <Route exact path="/diamondgroupamd" component={Info} />

                    <Route path="/diamondgroupamd/info" component={Info} />
                    <Route path="/diamondgroupamd/login" component={Login} />
                    <Route path="/diamondgroupamd/signup" component={Signup} />
                    <Route path="/diamondgroupamd/posts" component={Posts} />
                    <Route path="/diamondgroupamd/notifications" component={Notifications} />
                    <Route path="/diamondgroupamd/reset" component={ResetPassword} />
                    
                </Router>
            </div>
        </div>
    )
}

export default Index
