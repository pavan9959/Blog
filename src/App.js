import React from "react"
import { Link,Route} from "react-router-dom"
import Home from "./Home"
import User from "./User"
import Post from "./Post"
import Showpost from "./Showpost"
import Showcomment from "./Showcomment"


const App=(props)=>{
  return (
            <div>
                <Link to="/Home" >Home</Link>|<Link to="/User" >User</Link>|<Link to="/Post" >Post</Link>

                <Route path="/Home" component={Home} exact={true} />
                <Route path="/User" component={User} exact={true} />
                <Route path="/Post" component={Post} exact={true} />
                <Route path="/User/:id" component={Showpost} exact={true} />
                <Route path="/comment/:id" component={Showcomment} exact={true} />
            </div>
          )
}

export default App
