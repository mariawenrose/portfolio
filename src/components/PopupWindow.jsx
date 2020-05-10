import React, {Component} from 'react'
import { withRouter, Route } from 'react-router-dom'
import WebProjects from './WebProjects'
import DesignProjects from './DesignProjects'

class PopupWindow extends Component {
    render() {
        return (
            <React.Fragment>
                <p className = {this.props.className}> I'm the window</p>
                <Route path='/web' component={WebProjects}/>
                <Route path='/design' component={DesignProjects}/>
            </React.Fragment>
        )
    }
}

const PopupWindowWithRouter = withRouter(PopupWindow)
export default PopupWindowWithRouter;