import React from 'react';
import ReactDom from 'react-dom'
import {
    BrowserRouter as Router
} from 'react-router-dom';
import RouterView from './router/RouterView'
import config from './router/router.config'
ReactDom.render(<Router>
    <RouterView routes={config.routes}></RouterView>
</Router> , document.getElementById('root'))