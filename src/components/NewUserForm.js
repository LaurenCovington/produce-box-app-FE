/* farmer creates relevant categories for region by filling out this form */
import React from 'react';
import { useState } from 'react';
import './NewUserForm.css'
import PropTypes from 'prop-types';

/* HOW TO HOOK UP O-AUTH TO THE USER FORM? */
    /* SEARCH TUTORIAL  */


/* should user_type be here or somewhere else? how to have them choose 'F', 'C' or 'N'? */
/* attrs common across all users are first, how to handle nullable u_t-specific ones? how should they show up on the form? */
/* delivery count shouldnt be here bc they don't need to enter right off the bat; where to put it? */
const NewUserForm = (props) => {
    const [userForm, setUserForm] = useState({
        name: '',
        user_type: '', 
        username: '',
        password: '',
        address: '',
        phone: '',

        contribution_dropoff: false,
        donations_sent: 0,
        donations_received: 0,
        organization: '',
        delivery_count: 0

    });
    
    const onNameChange = (event) => {
        setUserForm({
            ...userForm,
            name: event.target.value
        })
    }

    // should this one exist? 
    const onUserTypeChange = (event) => {
        setUserForm({
            ...userForm,
            user_type: event.target.value
        })
    }

    const onUsernameChange = (event) => {
        setUserForm({
            ...userForm,
            username: event.target.value
        })
    }

    const onPasswordChange = (event) => {
        setUserForm({
            ...userForm,
            password: event.target.value
        })
    }

    const onAddressChange = (event) => {
        setUserForm({
            ...userForm,
            address: event.target.value
        })
    }

    const onPhoneChange = (event) => {
        setUserForm({
            ...userForm,
            phone: event.target.value
        })
    }

    const onContribDropChange = (event) => {
        setUserForm({
            ...userForm,
            contribution_dropoff: event.target.value
        })
    }

    const onDonSentChange = (event) => {
        setUserForm({
            ...userForm,
            donations_sent: event.target.value
        })
    }

    const onDonReceivedChange = (event) => {
        setUserForm({
            ...userForm,
            donations_received: event.target.value
        })
    }

    const onOrganizationChange = (event) => {
        setUserForm({
            ...userForm,
            organization: event.target.value
        })
    }

    const onDeliveryCountChange = (event) => {
        setUserForm({
            ...userForm,
            delivery_count: event.target.value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.createNewUser({
            name: userForm.name,
            user_type: userForm.user_type,
            username: userForm.username,
            password: userForm.password,
            address: userForm.address,
            phone: userForm.phone,

            contribution_dropoff: userForm.contribution_dropoff,
            donations_sent: userForm.donations_sent,
            donations_received: userForm.donations_received,
            organization: userForm.organization,
            delivery_count: userForm.delivery_count
        })

        setUserForm({
            name: '',
            user_type: '',
            username: '',
            password: '',
            address: '',
            phone: '',

            contribution_dropoff: '',
            donations_sent: 0,
            donations_received: 0,
            organization: '',
            delivery_count: 0
        })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label>Preferred Name</label> 
                <input
                    value={userForm.name}
                    onChange={ onNameChange }
                    className={(userForm.name.length === 0) || (userForm.name.length > 30)? 'invalid-form-input' : ''}
                />
            </div>

            <div> {/* should this be here? */}
                <label>User Type</label> 
                <input
                    value={userForm.user_type}
                    onChange={ onUserTypeChange}
                    className={(userForm.user_type.length === 0) || (userForm.user_type.length > 20)? 'invalid-form-input' : ''}
                />
            </div>

            <div> {/* check className logic */}
                <label>Username</label> 
                <input
                    value={userForm.username}
                    onChange={ onUsernameChange }
                    className={(userForm.username.length === 0) || (userForm.username.length > 20)? 'invalid-form-input' : ''}
                />
            </div>

            <div> {/* check className logic */}
                <label>Password</label> 
                <input
                    value={userForm.password}
                    onChange={ onPasswordChange }
                    className={(userForm.password.length === 0) || (userForm.password.length > 10)? 'invalid-form-input' : ''}
                />
            </div>

            <div> {/* */}
                <label>Address</label> 
                <input
                    value={userForm.address}
                    onChange={ onAddressChange }
                    className={(userForm.address.length <= 0) || (userForm.address.length > 50)? 'invalid-form-input' : ''}
                />
            </div>

            <div> {/* */}
                <label>Phone</label> 
                <input
                    value={userForm.phone}
                    onChange={ onPhoneChange }
                    className={(userForm.phone.length <= 0) || (userForm.address.length > 12)? 'invalid-form-input' : ''}
                />
            </div>

            <div> {/* should this even be here? how to handle nullables?, disable logic given nullables? */}
                <label>Contribution Dropoff Location</label> 
                <input
                    value={userForm.contribution_dropoff}
                    onChange={ onContribDropChange }
                    //className={(offeringForm.bake_date.length < 0) || (offeringForm.usage_time_limit.length > 100)? 'invalid-form-input' : ''}
                />
            </div>

            <div> {/* nullables?, disable logic given nullables? */}
                <label>Organization</label> 
                <input
                    value={userForm.organization}
                    onChange={ onOrganizationChange }
                    //className={(offeringForm.bake_date.length < 0) || (offeringForm.usage_time_limit.length > 100)? 'invalid-form-input' : ''}
                />
            </div>
            
            {/* SHOULD DONATIONS SENT/REC AND DELIVERY COUNT EXIST? PLACE BELOW IF SO */}


            {/* what conditions should keep the submit button from working> add all conditions for 'disable-the-button' line */}
            <input className='submitUser'
                type="submit"
                value="Submit Account Information"
                disabled={((userForm.name.length === 0) || (userForm.name.length > 30))}
            />
        </form>
    );
};

export default NewUserForm;


NewUserForm.propTypes = {
    createNewOffering: PropTypes.func.isRequired
}
