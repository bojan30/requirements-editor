import React from 'react';

const Dropdown = ({ categories, isActiveDropdown, onSetActiveDropdown, onSetCategory, requirementFields }) => {
    const handleClick = () => {
        onSetActiveDropdown(!isActiveDropdown);
    }
    const setCategory = (id) => {
        onSetCategory(id);
        onSetActiveDropdown(false);
    }
    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick = {handleClick}>
                <div className="category">
                    <span>{requirementFields.category.categoryName}</span>
                </div>
                <i className={`fas fa-caret-down ${isActiveDropdown ? 'active' : ''}`}></i>
            </div>
                {
                isActiveDropdown && <ul className="dropdown-menu">
                    {
                        categories.map((category) => {
                            return (
                                <li key={category.categoryId} onClick = {(e,id) => setCategory(category.categoryId)}>
                                    {category.categoryName}
                                </li>
                            );
                        })
                    }
                </ul>
                }
        </div>
    );

}

export default Dropdown;