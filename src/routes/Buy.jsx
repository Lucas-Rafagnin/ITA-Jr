import React,{useState,useContext} from "react"
import { InfoContext } from "../Context/liveProductContext"

 function Buy(){
    const {productInfo,setProductInfo}=useContext(InfoContext)

    function handleSubmit(event){
        event.preventDefault()
    }

    return(
        <div className="buy--container">
           <div className="buy--display">
                <div className="buy--photo">
                    <img src="./public/Vector.png" />
                    <p>{productInfo.name}</p>
                </div>
                <p>{productInfo.price} R$</p>           
                 
           </div>
           <div className="buy--description">
            <p>{productInfo.description}</p>
            <form className="buy--form" onSubmit={handleSubmit}>
                <label className="buy--label" htmlFor="quant">Quantidade</label> 
                <select className="buy--select">
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
   
            </select>
            <button className="button--two">
            <img src="./public/AddFilled.png" />
            </button>
                
            </form>
           </div>
        </div>
    )
}

export default Buy