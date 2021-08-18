/* what theyll click on to get to '...com/<category_id>/<offerings' */
/* FE Category object; pic of the concept food, nav in buttons */
import React from "react";
import PropTypes from 'prop-types';
import './Category.css';


const Category = (props) => {
    const deleteCategoryClick = () => {
        const selectedCategoryId = props.id
        props.deleteCategory(selectedCategoryId)
    };

    return (
        <div className='single-category'> 
            <button className="categorybutton" onClick={() => props.onCategorySelect({id:props.id, category_title:props.category_title})}>
                { props.category_title }
            </button>
            <button className="deletebutton" onClick={deleteCategoryClick} >Delete Category</button>
        </div>
    
    );
    
};

export default Category;


Category.propTypes = {
    id: PropTypes.number.isRequired, 
    category_title: PropTypes.string.isRequired, 
    onCategorySelect: PropTypes.func.isRequired

}