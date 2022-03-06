import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./services/Store";
import 'animate.css';
import {HelmetProvider} from 'react-helmet-async';

ReactDOM.render(
    <HelmetProvider>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </HelmetProvider>,
    document.getElementById('root')
);
