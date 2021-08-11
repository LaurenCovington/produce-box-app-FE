/* list of categories; create_category endpoint is BE equivalent? */
import React from 'react';
import Category from './Category';
import PropTypes from 'prop-types';
import './CategoryList.css';

const CategoryList = (props) => { 
    
    const listofCategories = props.categoriesData.map((category) => { // line 29
        return (
            <Category 
            key= {category.id} // own names or BE attr names?
            title= {category.title}
            id= {category.id} // in template 2x
            // foods = {category.associated_foods} >>>>>> no need!
            onCategorySelect= {props.selectedCategory}
            deleteCategory= {props.deleteCategory}
            />
        )
    })  
    return <div className='listofCategories'>{ listofCategories }</div>
}

export default CategoryList;



// enforce existence and proper data types
CategoryList.propTypes = {
    categoriesData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
        // foods: PropTypes.number.isRequired >> ???
        
    })),
    deleteCategory: PropTypes.func.isRequired,
    selectedCategory: PropTypes.func.isRequired
}


