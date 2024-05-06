import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Characters = () => {    
    
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    

    const favoriteTask = (item) => {
        actions.addFavorites(item.name)
      }
      const cartTask = (item) => {
        actions.addCart(item.name)
      }
    const handleDetails = (id) =>{
        actions.getItemDetails(id);
        navigate (`/details/${id}`)
    }
    const handleOnError = (event)=> {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return ( 
        <div className="container-fluid row d-flex justify-content-center"> 
        {store.items.map ((item, index) =>  
            <div key={index} className="card m-3 col-sm-4 col-md-3 col-lg-2" style= {{width: "18rem;"}} >
                <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                        <h5 className="card-title">{item.name}</h5>
                        <button onClick={() => { cartTask(item) }}  className="btn btn-outline-secondary mb-2">+</button>
                        </div>                       
                                             
                        <div className="d-flex justify-content-between">
                            
                            <button onClick={()=> handleDetails(item.uid)} className="btn btn-secondary">Details</button>
                            <button onClick={() => { favoriteTask(item) }}  className="btn btn-outline-info"><i className="far fa-heart"></i></button>  
                        </div>
                    </div>
            </div>  
        )}    
        </div>          
    )
}