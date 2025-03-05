import { createContext, useState,useEffect } from "react";
import {blogData} from '../assets/assets'

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const [searchFilter,setSearchFilter]=useState('')
    const [isSearched,setIsSearched]=useState(false)
    const [blogs,setBlogs]=useState([])

    //function to fetch blogs
    const fetchBlogs=async()=>{
        setBlogs(blogData)
    }

    useEffect(() => {
      fetchBlogs()
    }, [])
    

    const value={
        setIsSearched,isSearched,
        setSearchFilter,searchFilter,
        blogs,setBlogs
    }
    return (<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}