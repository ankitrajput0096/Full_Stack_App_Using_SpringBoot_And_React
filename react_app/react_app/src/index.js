import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppRoutes from './routes/routes';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.querySelector("#root")
);

if (module.hot) {
    module.hot.accept();
}