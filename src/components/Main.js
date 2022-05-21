import { Route, Link, Switch } from "react-router-dom"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Stock from "../pages/Stock"
import About from "../pages/About"

function Main(props) {
    return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/stock/:symbol" render={(rp) => <Stock {...rp}/>}/>
        <Route path="/stocks">
            <Dashboard/>
        </Route>
    </Switch>
    );
}

export default Main