import dropArrow from '../assets/drop-arrow.png';

export function EducationInput ({ educationData }) {
    console.log(educationData)
    const arrowIcon = new Image()
    arrowIcon.src = dropArrow;

    function storeEducationInputs(educationID, educationStorage, value) {
        console.log('hi')
    }


    return (
        <>
            <h2 className="education-header">Education</h2>
            <button className="dropdown-button">
                {/* not working... need to come back to this: */}
                {/* {arrowIcon} */}
            </button>

            <div className='education-inputs-container'>
                {educationData.map((education) => {
                    const educationStorage = education

                    return (
                        <form action="push" key={education.id}>
                        
                            <label htmlFor="school-name">School:</label>
                            <input 
                                type="text"
                                name='school-name'
                                value={education.school}
                                onChange={(e) => {
                                    storeEducationInputs(education.id, educationStorage, e.target.value)
                                }}
                            />
                            <button className='Save'>
                                Save
                            </button>
                            <button className='delete'>
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

            </div>

            

        </>
    )
}

// possibly create a new object and add to EducationList as an array item
// that has all the details of ONE Education instance.

// then when "Add New" is clicked, the display Education component
// will read the contents of each education object in EducationList, and
// render the display of it