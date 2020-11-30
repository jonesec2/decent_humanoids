import logo from './logo.svg';
import React  from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import NoMatch from "./pages/NoMatch"
import Timeline from "./pages/Timeline"
import Wiki from "./pages/Wiki"



export default function App() {


   return (

      <Router>
         <div className="ttttt">
            {/* <LandingPage /> */}
            <Switch>
               <Route exact path ={"/Decent_Humanoids/"} component={LandingPage} />
               <Route exact path={"/home"} component={Home} />
               <Route exact path ={"/wiki"} component={Wiki} />
               <Route exact path = {"/timeline"} component={Timeline} />
               <Route>
                  <NoMatch />
               </Route>
            </Switch>
         </div >
      </Router >
   );

}
