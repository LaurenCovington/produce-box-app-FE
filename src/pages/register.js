import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
//import "../../styles/home.scss";

// sign up page, template from login.js
export const Register = () => {
	const { store, actions } = useContext(Context);

    const [ name, setName ] = useState(""); 
    const [ email, setEmail ] = useState("");
    const [ user_type, setUserType ] = useState("");  
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ phone, setPhone ] = useState("");

    {/* p sure these shouldnt be here... which means they shouldnt be in NewUserForm.js, either... */}
    const [ contribution_dropoff, setContributionDropoff ] = useState("");
    const [ donations_sent, setDonationsSent ] = useState("");
    const [ donations_received, setDonationsReceived ] = useState("");
    const [ organization, setOrganization ] = useState("");
    const [ delivery_count, setDeliveryCount] = useState("");

    // check if useHistory is relevant for registration...
    const history = useHistory();
    //const token = sessionStorage.getItem("token") >> from login
    //console.log('Verifying token: ' + store.user)
    // validation: add logic to decline email's already in the db -- hit BE create_user() 

    const handleClick = () => {
        actions.register(name, email, user_type, username, password, address, phone,
            contribution_dropoff, donations_sent, donations_received, organization, delivery_count)
    };

    if(store.user && store.user !== "" && store.user !== undefined) history.push("/login"); // if user's not there, push to login page

	return (
		<div className="text-center mt-5">
			<h1>Register Here</h1>
                { (store.user && store.user !== "" && store.user !== undefined) ? "Welcome, " + store.user : 
                
                <div>
                    <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="user type" value={user_type} onChange={(e) => setUserType(e.target.value)}/>
                    <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="text" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    <input type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    
                    <input type="text" placeholder="contribution dropoff" value={contribution_dropoff} onChange={(e) => setContributionDropoff(e.target.value)}/>
                    <input type="text" placeholder="donations sent" value={donations_sent} onChange={(e) => setDonationsSent(e.target.value)}/>
                    <input type="text" placeholder="donations received" value={donations_received} onChange={(e) => setDonationsReceived(e.target.value)}/>
                    <input type="text" placeholder="organization" value={organization} onChange={(e) => setOrganization(e.target.value)}/>
                    <input type="text" placeholder="delivery count" value={delivery_count} onChange={(e) => setDeliveryCount(e.target.value)}/>
                    <button onClick={handleClick}>Register!</button>
                </div>
                }
		</div>
	);
};

export default Register;