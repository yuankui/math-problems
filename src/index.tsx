import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {rootReducer} from "./redux/rootReducer";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux';
import {commandMiddleware, enhanceCommandReducer} from "redux-commands";
import {InitCommand} from "./redux/command/InitCommand";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(enhanceCommandReducer(rootReducer),
    composeEnhancers(applyMiddleware(
        commandMiddleware,
    )));

const run = async () => {
    await store.dispatch(new InitCommand());
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
};

run();