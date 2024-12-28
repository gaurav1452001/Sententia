import { createContext, useState } from "react";

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const [searchFilter,setSearchFilter]=useState('')
    const [isSearched,setIsSearched]=useState(false)

    const value={
        setIsSearched,isSearched,setSearchFilter,searchFilter,
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}