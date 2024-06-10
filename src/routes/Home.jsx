import React,{useState,useContext} from "react"
import { ProductContext } from "../Context/ProductsContext.jsx"
import Content from "../Components/Content.jsx"
import Card from "../Components/Card.jsx"
import Form from "../Components/Form.jsx"

 function Home(){
    const {productList}=useContext(ProductContext)

    const cardDoce= productList.map(element=>{
        return(<Card {...element} />)
    })

    return(
     <div className="home">   
       <Content />
       <div className="cupcake--list">
           {cardDoce}
       </div>
       <Form />
     </div>
    )
}

export default Home