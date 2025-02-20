import React from "react";
import { Link } from "react-router-dom";
import blue from "../../img/singluarity.jpg";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar ">
			<div className="container-fluid ">
				<Link className="navbar-brand" to="/">
					<img src={blue} width="50" height="50" className="d-inline-block align-text-top" />
				</Link>

				<div className="d-flex" role="search">

					<Link to="/demo">
						<button className="btn btn-primary">Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
