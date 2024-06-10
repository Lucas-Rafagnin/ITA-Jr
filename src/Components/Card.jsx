import React,{useState,useContext} from "react"
import { InfoContext } from "../Context/liveProductContext"
import { Link} from "react-router-dom"

function Card(props){
    const {productInfo,setProductInfo}=useContext(InfoContext)
    function toggleInfo(){
        setProductInfo(
            {
                name:props.name,
                price:props.price,
                description:props.description,
                id:props.id,
            }
        )
    }
    return(
      <div className="link--div">
        <Link to="buy">
        <div className="card" onClick={toggleInfo}>
            <img className="card--logo" src="./public/Vector.png" />
            <p>{props.name}</p>
        </div>
       </Link>
      </div>  
      
    )

}

export default Card