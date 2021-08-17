/* show example completed offering that's viewable to commres */
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
// add expiration date below! prevent offering post, i think

const PretendCommres = (props) => {
    const [newOfferingDetails, setNewOfferingDetails] = useState({'name': props.name,
                                                            "total_inventory": props.total_inventory,
                                                            "usda_organic": props.usda_organic,
                                                            "usage_time_limit": props.usage_time_limit,
                                                            "side_effects": props.side_effects,
                                                            "contribution_date": props.contribution_date,
                                                            "bake_date": props.bake_date,
                                                            "dried_date": props.dried_date,
                                                            "make_date": props.make_date,
                                                            "dropoff_location": props.dropoff_location});
    {/* below? */}
    const [showEditBox, setShowEditBox] = useState(false) 

    const editButtonClick = () => {
        setShowEditBox(!showEditBox);
    }
    {/* reference to func that's built and run in (group proj) App.js */}
    const upCountClick = () => {
        const selectedOfferingId = props.id
        props.upCountOffering(selectedOfferingId);

    };

    const deleteOfferingClick = () => {
        const selectedOfferingId = props.id
        props.deleteOffering(selectedOfferingId)
    };

    const onDetailsChange = (name, total_inventory, usda_organic, usage_time_limit, side_effects, contribution_date, bake_date, dried_date, make_date, dropoff_location) => {
        setNewOfferingDetails({
            ...newOfferingDetails,
            'name': name.target.value,
            'total_inventory': total_inventory.target.value,
            'usda_organic': usda_organic.target.value,
            'usage_time_limit': usage_time_limit.target.value,
            'side_effects': side_effects.target.value,
            'contribution_date': contribution_date.target.value,
            'bake_date': bake_date.target.value,
            'dried_date': dried_date.target.value,
            'make_date': make_date.target.value,
            'dropoff_location': dropoff_location.target.value
        })
    }
    {/* editOffering() is a func that's built and run in (group proj) App.js file */}
    const onSubmitOfferingDetails = () => {
        props.editOffering(props.id, newOfferingDetails);
        setShowEditBox(!showEditBox)
    };

    return (

    <section>
        <ul>
            <>
                {showEditBox ? (
                <> {/* what should be in <textarea> and <li> default values?? surely not every field? */}
                    <textarea defaultValue={props.name} onChange={ onDetailsChange }></textarea>
                    <button onClick={() => onSubmitOfferingDetails(newOfferingDetails)}>Save</button>
                </>
                ) : <li className="offering-details" >Offering: { props.name }</li>}
                </>
            {/* first button hooked up to total inventory... should be hooked to a quantity be attr (would have to create that db table) */}
            <button className="stickybutton" type='button' onClick={upCountClick}> Up the batch count for order:  {props.total_inventory}</button>
            <button className="stickybutton" type='button' onClick={deleteOfferingClick}>Delete</button>
            {/* prob should be on some other page? or link to that page? */}
            <button className="stickybutton" type='button' onClick={editButtonClick}>Edit</button>
        </ul>
    </section>


    )
}

export default PretendCommres;

PretendCommres.propTypes = {
id: PropTypes.number.isRequired,
name: PropTypes.string.isRequired,
total_inventory: PropTypes.number.isRequired,
category_id: PropTypes.number.isRequired,
usda_organic: PropTypes.bool.isRequired,
usage_time_limit: PropTypes.string.isRequired,
side_effects: PropTypes.string.isRequired,
contribution_date: PropTypes.string.isRequired,
bake_date: PropTypes.string.isRequired,
make_date: PropTypes.string.isRequired,
dropoff_location: PropTypes.string.isRequired,

upCountOffering: PropTypes.func.isRequired,
deleteOffering: PropTypes.func.isRequired

}

