import {Theme} from "app/providers/ThemeProvider";


export const getByColor = (theme: Theme, idColor: number) => {
    let settings
    if (theme === Theme.DARK) {
        settings = ['#202124', '#5C2B29', '#614A19', '#635D19', '#345920', '#16504B']
    } else {
        settings = ['#ffffff', '#F28B82', '#FBBC04', '#FFF475', '#CCFF90', '#A7FFEB']
    }
    return settings[idColor]
}
