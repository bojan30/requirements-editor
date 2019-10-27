import React from 'react';

const RequirementsList = ({requirementsList, onSetRequirementEditorMode, onSetClickedRequirementId}) => {
    const handleClick = (id) => {
        onSetRequirementEditorMode(true);
        onSetClickedRequirementId(id);
    }
    return (
        <div className="requirements-wrapper">
            {
                requirementsList.map(requirement => {
                    return (
                        <div key={requirement.id} className="requirement">
                            <div className="overlay">
                                <button onClick={(e, id) => handleClick(requirement.id)} className="edit">
                                    <i className="fas fa-pencil-alt"></i>
                                </button>
                            </div>
                            <h3 className="req-title">{requirement.title}</h3>
                            <p className="description">{requirement.summary}</p>
                            <p className="category">{requirement.category.categoryName}</p>
                            <p className="time">Time: {requirement.start} - {requirement.end}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default RequirementsList;