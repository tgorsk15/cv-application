import { useState } from 'react';


export function ExperienceInput ({
    experienceData,
    experienceChange,
    experienceDelete,
    experienceAdd
    }) {

    const [tempExperienceData, setTempData] = useState(experienceData)

    function storeExperienceInputs(experienceID, property, value) {
        const activeIndex = getActiveIndex(tempExperienceData, experienceID);

        const tempStorage = [...tempExperienceData]
        tempStorage[activeIndex] = {
            ...tempStorage[activeIndex], [property]: value
        }
        console.log(tempStorage);
        setTempData(tempStorage)
    }

    function getActiveIndex(dataArray, id) {
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i].id === id) {
                return i
            }
        }
    }

    function handleSaveExperience(currentData) {
        const newExperienceState = [...currentData]
        console.log(newExperienceState)
        experienceChange(newExperienceState)
    }


return (
    <>
        <h2 className="experience-header">Experience</h2>

            <div className='experience-inputs-container'>
                {tempExperienceData.map((experience) => {
                    return (
                        <form action="push" className='experience-edit-form' key={experience.id}>
                            <label htmlFor="employer-name">Employer:</label>
                            <input 
                                type="text"
                                name='employer-name'
                                id='employer-name'
                                value={experience.employer}
                                onChange={(e) => {
                                    storeExperienceInputs(experience.id, "employer", e.target.value)
                                }}
                            />
                            <label htmlFor="role-name">Name of Role:</label>
                            <input 
                                type="text"
                                name='role-name'
                                id='role-name'
                                value={experience.role}
                                onChange={(e) => {
                                    storeExperienceInputs(experience.id, "role", e.target.value)
                                }}
                            />
                            <div className='experience-dates'>
                                <label htmlFor="start-date">Start Date:</label>
                                <input 
                                    type="text"
                                    name='start-date'
                                    id='start-date'
                                    value={experience.startDate}
                                    onChange={(e) => {
                                    storeExperienceInputs(experience.id, "startDate", e.target.value)
                                }}
                                 />
                                <label htmlFor="end-date">End Date:</label>
                                <input 
                                    type="text"
                                    name='end-date'
                                    id='end-date'
                                    value={experience.endDate}
                                    onChange={(e) => {
                                    storeExperienceInputs(experience.id, "endDate", e.target.value)
                                }}
                                 />
                            </div>
                            <div className='experience-buttons'>
                                <button className='save'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSaveExperience(tempExperienceData);
                                    }}
                                >
                                    Save
                                </button>
                                <button className='delete'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        experienceDelete(tempExperienceData, experience.id)
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                             
                        </form>
                    )

                })}
                <button className='add-experience'
                    onClick={(e) => {
                        e.preventDefault();
                        experienceAdd(tempExperienceData)
                    }}
                >
                    Add New
                </button>
            </div>
    </>
)

}