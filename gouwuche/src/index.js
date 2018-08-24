import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import Index from './components/Index';
import './js/flexible'
ReactDom.render(<Provider store={store}>
    <Index/>
</Provider>,document.getElementById('root'))
fetch('/data.json')
    .then(res=>res.json())
    .then(body=>{
        store.dispatch({
            type:'NEWOBJ',
            playload:body
        })
    })