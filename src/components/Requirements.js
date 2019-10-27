import React, {useState} from 'react';
import RequirementsList from './RequirementsList';
import EditRequirementForm from './EditRequirementForm';

const Requirements = ({requirementsList, categories, onSave}) => {
    const [requirementEditorMode, setRequirementEditorMode] = useState(false);
    const [clickedRequirementId, setClickedRequirementId ] = useState(null); 
    const requirementToEdit = requirementsList.find(req => req.id === clickedRequirementId);

    const onSetRequirementEditorMode = (value) => {
        setRequirementEditorMode(value);
    }

    const onSetClickedRequirementId = (id) => {
        setClickedRequirementId(id);
    }

    const onCancel = () => {
        setRequirementEditorMode(false);
    }

    const onSubmit = (requirementFields) => {
        //save action here
        onSave(requirementFields);
        //then set requirementEditoreMode back to false
        setRequirementEditorMode(false);
    }

    return (
        <div className="requirements">
            <div className="header">
                <h2 className="title">Requirements</h2>
            </div>
            {
                !requirementEditorMode && <RequirementsList requirementsList={requirementsList} onSetRequirementEditorMode={onSetRequirementEditorMode} onSetClickedRequirementId={onSetClickedRequirementId}/>
            }
            {
                requirementEditorMode && <EditRequirementForm requirement = {requirementToEdit} onCancel = {onCancel} onSubmit = {onSubmit} categories = {categories} />
            }
        </div>
    );

}

export default Requirements;