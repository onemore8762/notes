import React from 'react';
import ReactDOM from 'react-dom/client';
import 'app/styles/index.css'
import {App} from './app/App';
import {ThemeProvider} from "./app/providers/ThemeProvider";
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "./app/providers/StoreProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
);
