import React,{ useState,useContext } from "react"
import { ProductContext } from "../Context/ProductsContext.jsx"


export default function Form(){
    const {productList,setProductList}=useContext(ProductContext)

    const [formData,setFormData]=useState(
        {
            name:"",
            price:"",
            description:"",
        }
    )

    function handleChange(event){
        
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:value
            }
        })

    }

    function addCupcake(event){
        event.preventDefault()
        setProductList(prev=>{
            return(
                [...prev,{
                    id:productList.length + 1,
                    name:formData.name,
                    price:formData.price,
                    description:formData.description,
                }]
            )
        })
    }
    

    return(
       <div> 
        <form className="add--form" onSubmit={addCupcake}>
            <div className="add--form--box">
                <label htmlFor="">Nome do produto</label>
                <input className="add--input"
                   type="text"
                   onChange={handleChange}
                   name="name"
                   value={formData.name}
                 />
            </div>
           

            <div className="add--form--box">
                <label>Preço</label>
                <input className="add--input"
                  type="text"
                  onChange={handleChange}
                  name="price"
                  value={formData.price}
                />
                
            </div>

            <div className="add--form--box">
                <label>Descrição</label>
                <input className="add--input"
                   type="text"
                   onChange={handleChange}
                   name="description"
                   value={formData.description}                
                /> 
            </div>
            
            <button className="button">
                <img src="./public/AddFilled.png" />
            </button>

        </form>
        </div> 
    )
}