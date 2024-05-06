import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const Details = () => {
    const { store } = useContext(Context);
    const { detailsItem } = store
    const params = useParams();
    const id = params.id;

    return (
        <div className="card text-light bg-secondary m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{detailsItem.name}</h4>
                        <p className="card-text"><b>Gender: </b>{detailsItem.gender}</p>
                        <p className="card-text"><b>Height: </b>{detailsItem.height}</p>
                        <p className="card-text"><b>Birthday: </b>{detailsItem.birth_year}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}