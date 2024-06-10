import {createContext,useState} from "react"
import data from "../data/data"

export const ProductContext= createContext()
export const ProductProvider=({children})=>{
    
    const [productList,setProductList]=useState(data)

    return(
        <ProductContext.Provider value={{productList,setProductList}}>
            {children}
        </ProductContext.Provider>
    )
}