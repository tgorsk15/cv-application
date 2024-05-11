import { useState } from 'react';
import dropArrow from '../assets/drop-arrow.png';

export function EducationInput ({ 
    educationData, 
    educationChange, 
    educationDelete,
    educationAdd
}) {
    const arrowIcon = new Image()
    arrowIcon.src = dropArrow;

    // let educationStorage = educationData
    const [tempEducationData, setTempData] = useState(educationData)


    function storeEducationInputs(educationID, property, value) {

        const activeIndex = getActiveIndex(tempEducationData, educationID);

        const tempStorage = [...tempEducationData]
        tempStorage[activeIndex] = {
            ...tempStorage[activeIndex], [property]: value
        }
        
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


    function handleSaveEducation(currentData) {
        const newEducationState = [...currentData]
        console.log(newEducationState);
        educationChange(newEducationState);

    }
    


    return (
        <>
            <h2 className="education-header">Education</h2>
            <button className="dropdown-button">
                {/* not working... need to come back to this: */}
                {/* {arrowIcon} */}
            </button>

            <div className='education-inputs-container'>
                {tempEducationData.map((education) => {
                    // const educationStorage = education
                    
                    return (
                        <form action="push" className='education-edit-form' key={education.id}>
                        
                            <label htmlFor="school-name">School:</label>
                            <input 
                                type="text"
                                name='school-name'
                                id='school-name'
                                value={education.school}
                                onChange={(e) => {
                                    storeEducationInputs(education.id, "school", e.target.value)
                                }}
                            />
                            <label htmlFor="degree-level">Level Achieved:</label>
                            <input
                                type='text'
                                name='degree-level'
                                id='degree-level'
                                value={education.studyLevel}
                                onChange={(e) => {
                                    storeEducationInputs(education.id, "studyLevel", e.target.value)
                                }}
                            />
                            <div className='education-dates'>
                                <label htmlFor="start-date">Start Date:</label>
                                <input
                                    type='text'
                                    name='start-date'
                                    id='start-date'
                                    value={education.startDate}
                                    onChange={(e) => {
                                        storeEducationInputs(education.id, "startDate", e.target.value)
                                    }}
                                />
                                <label htmlFor="end-date">End Date:</label>
                                <input
                                    type='text'
                                    name='end-date'
                                    id='end-date'
                                    value={education.endDate}
                                    onChange={(e) => {
                                        storeEducationInputs(education.id, "endDate", e.target.value)
                                    }}
                                />
                            </div>
                            
                            <div className='education-buttons'>
                                <button className='save'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleSaveEducation(tempEducationData)
                                    }}
                                >
                                    Save
                                </button>
                                <button className='delete'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        educationDelete(tempEducationData, education.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                            
                        </form>

                    )
                    
                    
                })}
                <form className='education-add-form'>
                    <button className='add-education'
                        onClick={(e) => {
                            e.preventDefault();
                            educationAdd(tempEducationData);
                        }}
                    >
                        Add +
                    </button>
                </form>
                

            </div>

            

        </>
    )
}

// possibly create a new object and add to EducationList as an array item
// that has all the details of ONE Education instance.

// then when "Add New" is clicked, the display Education component
// will read the contents of each education object in EducationList, and
// render the display of it