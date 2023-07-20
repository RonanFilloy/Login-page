import React, {createContext, useState} from 'react';

const LanguageContext = createContext();

function LanguageProvider(props) {

    const [language, setLanguage] = useState('english');

    const changeLanguage = (evt) => {
        setLanguage(evt.target.value);
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export {LanguageProvider, LanguageContext}