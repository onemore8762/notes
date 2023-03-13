import React, {Suspense} from 'react';
import {Navbar} from "widgets/NavBar";
import {AppRouter} from "./providers/router";

export const App = () => {
    return (
        <div className={'app'}>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar/>
                <div className='content-page'>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
}
