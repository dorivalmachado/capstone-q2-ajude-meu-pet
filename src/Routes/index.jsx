import { Switch } from "react-router-dom";

import {useAuth} from "../Providers/Auth"
import Route from "./Route";


const Routes = () => {
    
    const {token} = useAuth();
    
    return(
        <Switch>
            {/* <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
            <Route exact path='/services' isPrivate component={}/>
            <Route exact path='/pets' isPrivate component={}/>
            <Route component={} isPrivate={!!token} /> */}
        </Switch>
    )
}

export default Routes