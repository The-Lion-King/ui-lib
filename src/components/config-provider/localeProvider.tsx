import React from 'react'
import zh_cn from './lang/zh-cn';


export const LocaleContext = React.createContext<any>(zh_cn);
interface LocaleProviderProps {
    locale:any
}

const LocaleProvider:React.FC<LocaleProviderProps> = (props) => {

    const {children, locale} = props
    return <LocaleContext.Provider value={locale}>
        {children}
    </LocaleContext.Provider>
}

export default LocaleProvider;