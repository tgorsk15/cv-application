import { useState } from 'react';
import dropArrow from '../assets/drop-arrow.png';


export function ExperienceInput ({experienceData, experienceChange}) {
    const arrowIcon = new Image()
    arrowIcon.src = dropArrow;

    const [tempExperienceData, setTempData] = useState(experienceData)

    function storeExperienceInputs(experienceID, property, value) {
        const activeIndex = getActiveIndex(tempExperienceData, experienceID);
        console.log(activeIndex)

        const tempStorage = [...tempExperienceData]
        tempStorage[activeIndex] = {
            ...tempStorage[activeIndex], [property]: value
        }
        console.log(tempStorage);
        setTempData(tempStorage)
    }

    function getActiveIndex(dataArray, id) {
        console.log(id);
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
            <button className="dropdown-button">
                {/* not working... need to come back to this: */}
                {/* {arrowIcon} */}
            </button>

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
                             <button className='Save'
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
                                    
                                }}
                            >
                                Delete
                            </button>
                        </form>
                    )

                })}
                <button className='add-education'
                    onClick={(e) => {
                        e.preventDefault();
                        
                    }}
                >
                    Add +
                </button>
            </div>
    </>
)

}