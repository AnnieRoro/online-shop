import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const favoriteTask = (item) => {
        actions.addFavorites(item.name)
      }
      const handlePlanetDetails = (id) =>{
        actions.getPlanetDetails(id);
        navigate (`/details-planets/${id}`)
    }
    const handleOnError = (event)=> {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      };

    return (
        <div>
            <div className="container-fluid row d-flex justify-content-center">
                {store.planets.map((item, index) =>
                    <div key={index} className="card m-3 col-sm-4 col-md-3 col-lg-2" style={{ width: "18rem;" }} >
                        <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.diameter}</p>
                            <div className="d-flex justify-content-between">
                               
                                    <button onClick={()=> handlePlanetDetails(item.uid)} className="btn btn-secondary">Details</button>
                                
                                <button onClick={() => { favoriteTask(item) }}  className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}