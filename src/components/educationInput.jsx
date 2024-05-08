import { useState } from 'react';
import dropArrow from '../assets/drop-arrow.png';

export function EducationInput ({ educationData, educationChange }) {
    const arrowIcon = new Image()
    arrowIcon.src = dropArrow;

    let educationStorage= educationData
    const [tempEducationData, setTempData] = useState(educationStorage)


    function storeEducationInputs(educationID, property, value) {

        const activeIndex = getActiveIndex(tempEducationData, educationID);
        console.log(activeIndex)

        const tempStorage = [...tempEducationData]
        tempStorage[activeIndex] = {
            ...tempStorage[activeIndex], [property]: value
        }
        console.log(tempStorage)
        
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
                        <form action="push" key={education.id}>
                        
                            <label htmlFor="school-name">School:</label>
                            <input 
                                type="text"
                                name='school-name'
                                value={education.school}
                                onChange={(e) => {
                                    storeEducationInputs(education.id, "school", e.target.value)
                                }}
                            />
                            <label htmlFor="degree-level">Level Achieved:</label>
                            <input
                                type='text'
                                name='degree-level'
                                value={education.studyLevel}
                                onChange={(e) => {
                                    storeEducationInputs(education.id, "studyLevel", e.target.value)
                                }}
                            />
                            <label htmlFor="start-date">Start Date:</label>
                            <input
                                type='text'
                                name='start-date'
                                value={education.startDate}
                                onChange={(e) => {
                                    storeEducationInputs(education.id, "startDate", e.target.value)
                                }}
                            />
                            <label htmlFor="end-date">End Date:</label>
                            <input
                                type='text'
                                name='end-date'
                                value={education.endDate}
                                onChange={(e) => {
                                    storeEducationInputs(education.id, "endDate", e.target.value)
                                }}
                            />

                            <button className='Save'
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
                                    
                                }}
                            >
                                Delete
                            </button>
                        </form>

                    )
                    
                    
                })}
                <form className='education-add-form'>
                    <button className='add-education'>
                        Add +
                    </button>
                </form>
                <br></br>
                <br />

            </div>

            

        </>
    )
}

// possibly create a new object and add to EducationList as an array item
// that has all the details of ONE Education instance.

// then when "Add New" is clicked, the display Education component
// will read the contents of each education object in EducationList, and
// render the display of it