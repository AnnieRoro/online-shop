import React from "react";
import { Link } from "react-router-dom";
import { Favoritos } from "../component/Favorites.jsx";
import { Cart } from "./Cart.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar bg-light text-secondary">
			<div className="container m-0">
				
					<Link to="/" className="navbar-brand">
						<img src="https://images.vexels.com/media/users/3/200098/isolated/preview/7ad7c76da9a0cd7d2b01b64b2590617b-icono-de-carrito-de-compras-icono-de-carrito-de-compras.png" alt="Bootstrap" width="100" height="100" />
						<img src="https://cdn.freebiesupply.com/logos/thumbs/1x/shopi-1-logo.png" alt="Bootstrap" width="100" height="100" />
					</Link>
				
			</div>
			<div className="d-flex justify-content-beteween">
				<div>
					<ul className="nav">
						
							<li  className="nav-item">
								<Link className="nav-link text-secondary" to="/characters">Items</Link>
							</li>					
					</ul>
				</div>
			<Favoritos />
			<Cart />							
			</div>
		</nav>
	);
};
