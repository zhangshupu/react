import Index from './components/Index.jsx'
import React from 'react';
import ReactDom from 'react-dom';
import store from './store/store'
import {Provider} from 'react-redux'
ReactDom.render(<Provider store={store}>
    <Index/>
</Provider>,document.getElementById('root'))