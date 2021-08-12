// LINES 51, 75 CORRECT THE ROUTE!! (see 1:07:45 in https://www.youtube.com/watch?v=8-W2O_R95Pk&t=4065s&ab_channel=BreatheCode to see how he did it (straight urls))
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("App just loaded, syncing local storage session token");
				if(token && token !=="" && token!==undefined) setStore({ token: token});
			},
			// copied and pased from above.. is this what's needed?
			syncUserFromSessionStore: () => {
				const user = sessionStorage.getItem("user");
				console.log("App just loaded, syncing local storage session user");
				if(user && user !=="" && user!==undefined) setStore({ user: user});
			},

			logout: () => {
				sessionStorage.removeItem("token");
				console.log("Logging Out...");
				setStore({ token: null})
			},

			login: async (email, password) => {
				const opts = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				};
				
				try{
					const resp = await fetch('https://produce-box-app.herokuapp.com/', opts)
					if (resp.status !== 200){
						alert("There's an error caught from flux.js");
						return false;
					}
				
					const data = await resp.json();
					console.log("this came from backend: ", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token})
					return true;
				}
				catch(error){
					console.error("There's been an error.")
				}
			},

			getMessage: () => {
				const store = getStore();
				const opts = {
					headers: {
						"Authorization": "Bearer " + store.token
					}
				}
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;