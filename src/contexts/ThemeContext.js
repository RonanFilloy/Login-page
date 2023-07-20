import React, {createContext} from 'react';
import useToggle from '../hooks/useToggle';

const ThemeContext = createContext();

function CustomThemeProvider(props) {

    let [darkTheme, toggleTheme] = useToggle(false);

    return(
        <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export {CustomThemeProvider, ThemeContext}