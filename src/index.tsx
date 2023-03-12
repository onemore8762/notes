import React from 'react';
import ReactDOM from 'react-dom/client';
import 'app/styles/index.css'
import App from './app/App';
import {ThemeProvider} from "./app/providers/ThemeProvider";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);
