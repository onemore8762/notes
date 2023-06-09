import {type FC, type ReactNode} from 'react'
import {Provider} from 'react-redux'
import {store} from 'app/providers/StoreProvider'

interface StoreProviderProps {
    children?: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

