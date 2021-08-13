import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// home page: this is what users will see after logging in
//import "../../styles/home.scss";
// warning on 11???

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (store.token && store.token!=="" && store.token!==undefined) actions.getMessage();}, [store.token]);

	return (
		<div className="text-center mt-5">
			<h1>Welcome!</h1>
			<p>
				<img alt="a pic" />
			</p>

			<div className="alert alert-info">{store.message}</div>
			<p>
				Placeholder Home Page:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { userActions } from '../_actions';

// class HomePage extends React.Component {
//     componentDidMount() {
//         this.props.getUsers();
//     }

//     handleDeleteUser(id) {
//         return (e) => this.props.deleteUser(id);
//     }

//     render() {
//         const { user, users } = this.props;
//         return (
//             <div className="col-md-6 col-md-offset-3">
//                 <h1>Hi {user.firstName}!</h1>
//                 <p>You're logged in with React!!</p>
//                 <h3>All registered users:</h3>
//                 {users.loading && <em>Loading users...</em>}
//                 {users.error && <span className="text-danger">ERROR: {users.error}</span>}
//                 {users.items &&
//                     <ul>
//                         {users.items.map((user, index) =>
//                             <li key={user.id}>
//                                 {user.firstName + ' ' + user.lastName}
//                                 {
//                                     user.deleting ? <em> - Deleting...</em>
//                                     : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
//                                     : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
//                                 }
//                             </li>
//                         )}
//                     </ul>
//                 }
//                 <p>
//                     <Link to="/login">Logout</Link>
//                 </p>
//             </div>
//         );
//     }
// }

// function mapState(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return { user, users };
// }

// const actionCreators = {
//     getUsers: userActions.getAll,
//     deleteUser: userActions.delete
// }

// const connectedHomePage = connect(mapState, actionCreators)(HomePage);
// export { connectedHomePage as HomePage };
