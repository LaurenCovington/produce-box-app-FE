/* what theyll click on to get to '...com/<category_id>/<offerings' */
/* FE Category object; pic of the concept food, nav in buttons */
import React from "react";
import PropTypes from 'prop-types';
import './Category.css';


const Category = (props) => {

    const deleteCategoryClick = () => {
        const selectedCategoryId = props.id // right values? 
        props.deleteCategory(selectedCategoryId)
    };

    return (
        
            <div> {/* add '...,food:props.associated_foods' to the end? */}
                <button className="categorybutton" onClick={() => props.onCategorySelect({id:props.id,title:props.title})}> {/* right values? */}
                    {props.title} {/* category title will display from here */}
                </button>
                <button className="deletebutton" onClick={deleteCategoryClick} >Delete Category</button>
            </div>
    
    );
    
};

export default Category;


Category.propTypes = {
    id: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired, 
    onCategorySelect: PropTypes.func.isRequired

}