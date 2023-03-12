import React, { type ReactElement, Suspense } from 'react'
import {PageLoader} from "../../../../shared/ui/PageLoader/PageLoader";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig";

export const AppRouter = (): ReactElement => {
    console.log(routeConfig)
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={(
                        <div className={'page-wrapper'}>
                            {element}
                        </div>
                    )}>
                    </Route>
                ))}
            </Routes>
        </Suspense>
    )
}
