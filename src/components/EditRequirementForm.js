import React,{useState} from 'react';
import Dropdown from './Dropdown';

const EditRequirementForm = ({requirement, onCancel, onSubmit, categories}) => {
    const [requirementFields, setRequirementFields] = useState({
        id: requirement.id,
        title: requirement.title,
        summary: requirement.summary,
        category: {
            categoryId: requirement.category.categoryId,
            categoryName: requirement.category.categoryName
        },
        start: requirement.start,
        end: requirement.end,
        extract: requirement.extract
    });
    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const cancel = () => {
        onCancel();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(requirementFields);
    }
    const onSetActiveDropdown = (value) => {
        setIsActiveDropdown(value);
    }
    const onSetCategory = (id) => {
        setRequirementFields({...requirementFields, category: {
            categoryId: categories.find(c => c.categoryId === id).categoryId,
            categoryName: categories.find(c => c.categoryId === id).categoryName
        }})
    }
    return (
        <form onSubmit={handleSubmit} className="requirement-form">
            <div className="form-group">
                <div className="input-wrapper">
                    <label htmlFor="title">Title</label>
                    <input id="title" onChange={(e) => setRequirementFields({ ...requirementFields, [e.target.id]: e.target.value })} type="text" value={requirementFields.title} />
                </div>
            </div>
            <div className="form-group">
                <div className="input-wrapper">
                    <label htmlFor="summary">Description</label>
                    <input id="summary" onChange={(e) => setRequirementFields({ ...requirementFields, [e.target.id]: e.target.value })} type="text" value={requirementFields.summary} />
                </div>
            </div>
            <div className="form-group">
                <Dropdown categories = {categories} isActiveDropdown = {isActiveDropdown} onSetActiveDropdown = {onSetActiveDropdown} onSetCategory = {onSetCategory} requirementFields = {requirementFields}/>
            </div>
            <div className="form-group">
                <div className="input-wrapper">
                    <label htmlFor="start">Start</label>
                    <input readOnly id="start" type="text" value={requirementFields.start} />
                </div>
            </div>
            <div className="form-group">
                <div className="input-wrapper">
                    <label htmlFor="end">End</label>
                    <input readOnly id="end" type="text" value={requirementFields.end} />
                </div>
            </div>
            <div className="form-group">
                <div className="input-wrapper">
                    <label htmlFor="extract">Extract</label>
                    <input readOnly id="extract" type="text" value={requirementFields.extract} />
                </div>
            </div>
            <div className="buttons">
                <button className="btn save">Save Requirement</button>
                <button type="button" onClick={cancel} className="btn cancel">Cancel</button>
            </div>
        </form>
    );
}

export default EditRequirementForm; 