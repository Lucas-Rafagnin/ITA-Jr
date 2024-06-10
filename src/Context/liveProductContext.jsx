import {createContext,useState} from "react"

export const InfoContext= createContext()
export const InfoProvider=({children})=>{
    
    const [productInfo,setProductInfo]=useState({
        id:"",
        name:"",
        price:"",
        description:"",
    })

    return(
        <InfoContext.Provider value={{productInfo,setProductInfo}}>
            {children}
        </InfoContext.Provider>
    )
}