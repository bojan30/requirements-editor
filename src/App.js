import React, {useState} from 'react';
import Requirements from './components/Requirements';
import './App.css';

const App = () => {

    const [requirementsList, setRequirementsList] = useState(
        [
            {
                id: "1",
                title: "Skin response measurements",
                summary: "Skin can be used to obtain multiple types of measurements",
                category: {
                    categoryId: "1",
                    categoryName: "Physical Analysis"
                },
                start: "10:00:02:00",
                end: "10:00:06:00",
                extract: "So you can measure all kinds of clever things. You can measure skin conductance and startle responses."
            },
            {
                id: "2",
                title: "Visual response measurements",
                summary: "Vision & eye movement can be used to obtain multiple types of measurements",
                category: {
                    categoryId: "1",
                    categoryName: "Physical Analysis"
                },
                start: "12:00:02:00",
                end: "12:00:06:00",
                extract: "Vision and eye movements are key indicators of cognitive processing."
            },
            {
                id: "3",
                title: "Vocal tone measurements",
                summary: "The quality and level of vocal projection are indicative of physical responses related to cognitive interactions",
                category: {
                    categoryId: "1",
                    categoryName: "Physical Analysis"
                },
                start: "14:00:02:00",
                end: "14:00:06:00",
                extract: "Speech therapists evaluate the pitch & volume of spoken sentences to evaluate the amount of oxygen a patient is using to speak"
            },
            {
                id: "4",
                title: "Writing pattern evaluation",
                summary: "Writing patterns can be utilized to evaluate stress patterns",
                category: {
                    categoryId: "2",
                    categoryName: "Writing Analysis"
                },
                start: "16:00:02:00",
                end: "16:00:06:00",
                extract: "I was able to tell that my writing was a bit off. I was writing so fast that when I looked back at what I had written I wasn't able to read it myself"
            },
        ]
    )

   const categories = [
       {
           categoryId: "1",
           categoryName: "Physical Analysis"
       },
       {
           categoryId: "2",
           categoryName: "Writing Analysis"
       },
       {
           categoryId: "3",
           categoryName: "Psycological Analysis"
       },
       {
           categoryId: "4",
           categoryName: "Visual Analysis"
       }
   ]
   const onSave = (requirement) => {
        const newRequirementsList = requirementsList.map(req => {
            if(req.id === requirement.id){
                return {
                    ...req,
                    title: requirement.title,
                    summary: requirement.summary,
                    category: {
                        categoryId: requirement.category.categoryId,
                        categoryName: requirement.category.categoryName
                    }
                }
            }
            return req;
        })
        setRequirementsList(newRequirementsList);
   }
    return (<div className = "app">
        <Requirements requirementsList = {requirementsList} categories = {categories} onSave = {onSave}/>
    </div>);

}

export default App;