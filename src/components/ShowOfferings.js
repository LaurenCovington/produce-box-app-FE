// this will be on my '/offerings' page, not home page (thats just for categories p much)
import React from 'react';

// KEEPING FROM COMPILING FOR NOW!!! (630PM 81621)
import Products from '../components/Products'; // offeringlist; do like {props.offerings by category} in the <h1>

export default function ShowOfferings(props) {

    return (
        <React.Fragment>
            <div className='header'>
            <div className="header-info">
                <h1><span className="header-offerings"> Relevant Offerings </span>addict</h1>

            </div>
        </div>

        <div className="offerings-display page">
            <Products /> {/* this will hold the offerings that are p much for display */}
        </div>
    </React.Fragment>
    )
}
