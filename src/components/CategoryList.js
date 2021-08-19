/* list of categories; create_category endpoint is BE equivalent? */
import React from 'react';
import Category from './Category';
import PropTypes from 'prop-types';
import './CategoryList.css';

const CategoryList = (props) => { 
    // shows that categoriesData is an arr like it's supposed to be for .map to run...
    // only guess is that when the page first loads, catData is at 0 bc it hasn't loaded the categories yet and .map returns undefined or whatever..
    console.log('whats there at first, type: ', typeof(props.categoriesData));
    console.log('whats there at first, actual: ', props.categoriesData);

    const categoriesData = Array.from(props.categoriesData);

    console.log('post array.from type: ', typeof(categoriesData));
    console.log('post array.from actual: ', (categoriesData));
    console.log('type for compare: ', typeof([1,2,3]));
    
    const listofCategories = props.categoriesData.map((category) => {
        return (
            <Category 
            key= {category.id} 
            category_title= {category.category_title}
            id= {category.id} // in template 2x
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
        category_title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })),
    deleteCategory: PropTypes.func.isRequired,
    selectedCategory: PropTypes.func.isRequired
}

