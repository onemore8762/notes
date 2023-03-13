import React from 'react';
import ReactDOM from 'react-dom/client';
import 'app/styles/index.css'
import {App} from './app/App';
import {ThemeProvider} from "./app/providers/ThemeProvider";
import {HashRouter} from "react-router-dom";
import {StoreProvider} from "./app/providers/StoreProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <HashRouter>
        <StoreProvider>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </StoreProvider>
    </HashRouter>
);
