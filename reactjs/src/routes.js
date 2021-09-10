import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Devschool from './pages/devschool/index'

export default function Routes () {
    return (
        <BrowserRouter> 
            <Switch> 
                <Route path="/" exact={true} component={Devschool} />
            </Switch>
        </BrowserRouter>
    )
}