import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsStarships = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const { detailsStarship } = store
    const id = params.id;
    
    const handleOnError = (event)=> {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return (
        <div className="card text-light bg-dark m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}  className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{detailsStarship.name}</h4>
                        <p className="card-text"><b>Model: </b>{detailsStarship.name}</p>
                        <p className="card-text"><b>Class: </b>{detailsStarship.starship_class}</p>
                        <p className="card-text"><b>Manufacter: </b>{detailsStarship.manufacter}</p>
                        <p className="card-text"><b>Length: </b>{detailsStarship.length}</p>
                        <p className="card-text"><b>Speed: </b>{detailsStarship.max_atmosphering_speed}</p>
                        <p className="card-text"><b>Crew: </b>{detailsStarship.crew}</p>
                        <p className="card-text"><b>Passengers: </b>{detailsStarship.passangers}</p>
                        <p className="card-text"><b>Cost: </b>{detailsStarship.cost_in_credits}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}