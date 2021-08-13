import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
//import rigoImageUrl from "../../img/rigo-baby.jpg";
//import "../../styles/home.scss";

// is "/" param inside history.push() correct???? same as in layout.js <Home /> component; anything to add on BE?
export const Login = () => {
	const { store, actions } = useContext(Context); // useContext must be beneath 
    const [ email, setEmail ] = useState("");  
    const [ password, setPassword ] = useState("");
    const history = useHistory();
    //const token = sessionStorage.getItem("token")
    console.log('Verifying token: ' + store.token)


    const handleClick = () => {
        actions.login(email, password)
    };

    if(store.token && store.token !== "" && store.token !== undefined) history.push("/"); // is store's null, this wont run

	return (
		<div className="text-center mt-5">
			<h1>Log In Below</h1>
                { (store.token && store.token !== "" && store.token !== undefined) ? "You logged in with " + store.token : 
                
                <div>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={handleClick}>Submit</button>
                </div>
                }
		</div>
	);
};

export default Login;