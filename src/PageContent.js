import React, {useContext} from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function PageContent(props) {

    const {darkTheme} = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: darkTheme ? 'black' : '#fafafa',
                height: '100vh',
                width: '100vw',
            }}
        >
            {props.children}
        </div>
    )
}

export default PageContent