import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";


export const Cart = () => {

    const { store, actions } = useContext(Context);
    const myCart = store.cart;

    return (
        <div className="dropdown me-3">
            <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                    {myCart.length}
                </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
                {myCart.length === 0 ? (
                    <li><span className="dropdown-item">No items selected</span></li>
                ) : (
                    myCart.map((item, id) => (
                        <li key={id} className="d-flex align-items-center">
                            <span className="dropdown-item">{item}</span>
                            <button type="button" className="btn btn-outline-danger"
                                onClick={() => actions.removeCart(item, myCart)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );

}