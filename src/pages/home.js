// home page: this is what users will see after logging in
//import "../../styles/home.scss";
// warning on 11???

import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
//import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Welcome, User!</h1>
			<p>
				<img alt='replace' />
			</p>
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div> {/* message is in flux.js, part of tut */}
			<p>
				Page Users see after login:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Remove this link
				</a>
			</p>
			<p>
                <Link to="/login">Logout</Link>
            </p>
		</div>
	);
};
export default Home;
