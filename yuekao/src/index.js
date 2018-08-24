import store from './store/store';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import Index from './components/Index';
import './js/flexible'
ReactDom.render(<Provider store={store}>
    <Index/>
</Provider>,document.getElementById('root'))