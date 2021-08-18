/* line 38 placeholder="whatever" is the default text inside a field that prompts users */
/* farmer creates relevant categories for region by filling out this form */
import React from 'react';
import { useState } from 'react';
import './NewCategoryForm.css'
import PropTypes from 'prop-types';


// /* confirm: no id after line 11?;;; whate are ... inside onTitleChange? */
const NewCategoryForm = (props) => {
    const [categoryForm, setCategoryForm] = useState({
        category_title: ''
    });
    
    const onTitleChange = (event) => {
        setCategoryForm({
            ...categoryForm,
            category_title: event.target.value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.createNewCategory({
            category_title: categoryForm.category_title
        })

        setCategoryForm({
            category_title: ''
        })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className='block-hover'>
                {/* <label>Title</label>  */}
                <input className='field'
                    placeholder="Category Name"
                    value={categoryForm.category_title}
                    onChange={ onTitleChange }
                    // className={(categoryForm.category_title.length === 0)? 'invalid-form-input' : ''}
                />
            </div>

            <input className='submit-prompt'
                type="submit"
                value="Submit Category"
                disabled={(categoryForm.category_title.length === 0)}
            />
        </form>
    );
};

export default NewCategoryForm;

NewCategoryForm.propTypes = {
    createNewCategory: PropTypes.func.isRequired
}