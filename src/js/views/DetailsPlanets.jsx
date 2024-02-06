import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsPLanets = () => {
    const { store, actions } = useContext(Context);
    

    return (
        <div className="card text-light bg-dark m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">Name</h4>
                        <p className="card-text"><b>Gender: </b> </p>
                        <p className="card-text"><b>Height: </b> </p>
                        <p className="card-text"><b>Birthday: </b> </p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}