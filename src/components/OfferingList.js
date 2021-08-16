/* list of categories; create_category endpoint is BE equivalent? */
import React from 'react';
import Offering from './Offering';
import PropTypes from 'prop-types';
import './OfferingList.css';

// creates and displays OfferingList component
const OfferingList = (props) => { 
    
    const listofOfferings = props.offeringsData.map((offering) => { 
        return (
            <Offering 
            key= {offering.id} // own names or BE attr names?
            name= {offering.name}
            id= {offering.id} // in group proj template 2x
            onOfferingSelect= {props.selectedOffering}
            deleteOffering= {props.deleteOffering}
            />
        )
    })  
    return <div className='listofOfferings'>{ listofOfferings }</div>
}

export default OfferingList;

// enforce existence  of ~ and proper data types
OfferingList.propTypes = {
    offeringsData: PropTypes.arrayOf(PropTypes.shape({
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
        
    })),
    deleteOffering: PropTypes.func.isRequired,
    selectedOffering: PropTypes.func.isRequired
}

