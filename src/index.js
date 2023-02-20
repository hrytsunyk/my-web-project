import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./redux/store";
import {Provider} from "react-redux";
import './layouts/BaseLayout.module.css'

const store = setupStore();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

