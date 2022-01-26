import { Switch } from "react-router-dom";
import Route from "./Route";


const Routes = () => {
    
    const accessToken = 'precisa pegar do useAuth';
    
    return(
        <Switch>
            <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
            <Route exact path='/services' isPrivate component={}/>
            <Route exact path='/pets' isPrivate component={}/>
            <Route component={} isPrivate={!!accessToken} />
        </Switch>
    )
}

export default Routes