import {type RouteProps} from 'react-router-dom'
import {NotesPage} from 'page/NotesPage'
import {NotFoundPage} from "page/NotFoundPage";

const enum AppRoutes {
    NOTES = 'notes',
    // last
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.NOTES]: '/notes',
    // last
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.NOTES]: {
        path: RoutePath.notes,
        element: <NotesPage/>
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
