import React, {Suspense} from 'react';
import {Navbar} from "../widgets/NavBar/Navbar";
import {AppRouter} from "./providers/router";

function App() {
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

export default App;
