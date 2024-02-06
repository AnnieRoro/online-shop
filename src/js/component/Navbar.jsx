import React from "react";
import { Link } from "react-router-dom";
import { Favoritos } from "../component/Favorites.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark text-secondary">
			<div className="container m-0">
				
					<Link to="/" className="navbar-brand">
						<img src="https://pngimg.com/d/star_wars_logo_PNG34.png" alt="Bootstrap" width="100" height="100" />
					</Link>
				
			</div>
			<div className="d-flex justify-content-beteween">
				<div>
					<ul className="nav">
						
							<li  className="nav-item">
								<Link className="nav-link text-secondary" to="/characters">Character</Link>
							</li>
					
						
							<li className="nav-item">
								<Link className="nav-link text-secondary" to="/planets">Planets</Link>
							</li>
						
						
							<li className="nav-item">
								<Link className="nav-link text-secondary" to ="/starship">Starship</Link>
							</li>
					
					</ul>
				</div>
			<Favoritos />							
			</div>
		</nav>
	);
};
