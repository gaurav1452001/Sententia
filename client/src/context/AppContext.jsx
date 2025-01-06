import { createContext, useState,useEffect } from "react";

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const [searchFilter,setSearchFilter]=useState('')
    const [isSearched,setIsSearched]=useState(false)
    const [blogs,setBlogs]=useState([])

    //fetching the blogs on listblogs

    const value={
        setIsSearched,isSearched,
        setSearchFilter,searchFilter,
        blogs,setBlogs
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}