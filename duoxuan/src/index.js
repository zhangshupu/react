import {
    Provider
} from 'react-redux';
import store from './store/store'
import React from 'react';
import ReactDom from 'react-dom';
import Index from './components/Index';
ReactDom.render(<Provider store={store}>
    <Index/>
</Provider>,document.getElementById('root'))