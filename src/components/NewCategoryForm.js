/* farmer creates relevant categories for region by filling out this form */
import React from 'react';
import { useState } from 'react';
import './NewCategoryForm.css'
import PropTypes from 'prop-types';


// /* confirm: no id after line 11?;;; whate are ... inside onTitleChange? */
const NewCategoryForm = (props) => {
    const [categoryForm, setCategoryForm] = useState({
        title: ''
    });
    
    const onTitleChange = (event) => {
        setCategoryForm({
            ...categoryForm,
            title: event.target.value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.createNewCategory({
            title: categoryForm.title
        })

        setCategoryForm({
            title: ''
        })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label>Title</label> 
                <input
                    value={categoryForm.title}
                    onChange={ onTitleChange }
                    className={(categoryForm.title.length === 0)? 'invalid-form-input' : ''}
                />
            </div>

            <input className='submit-prompt'
                type="submit"
                value="Submit Category"
                disabled={((categoryForm.title.length === 0) || (categoryForm.owner.length === 0))}
            />
        </form>
    );
};

export default NewCategoryForm;

NewCategoryForm.propTypes = {
    createNewCategory: PropTypes.func.isRequired
}