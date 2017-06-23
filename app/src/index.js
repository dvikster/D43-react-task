import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App';
import reducer from './reducers'

const store = createStore(reducer)
/*Для этого мы будем использовать Provider из react-redux.
Это сделает наш экземпляр хранилища доступным для всех компонентов,
которые располагаются в Provider компоненте*/


render(
    <Provider store={store}>
        <App todos={[]}/>
    </Provider>,
    document.getElementById('root')
)