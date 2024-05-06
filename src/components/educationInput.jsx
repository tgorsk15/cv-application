import dropArrow from '../assets/drop-arrow.png';

export function EducationInput ({ educationData }) {
    const arrowIcon = new Image()
    arrowIcon.src = dropArrow;


    return (
        <>
            <h2 className="education-header">Education</h2>
            <button className="dropdown-button">
                {/* not working... need to come back to this: */}
                {/* {arrowIcon} */}
            </button>

            <div className='education-inputs-container'>
                {educationData.map((education, index) => (
                    <form action="push" key={education.id}>
                        <label htmlFor="school-name">School:</label>
                        <input 
                            type="text"

                        />
                    </form>
                ))}
                

            </div>

            

        </>
    )
}

// possibly create a new object and add to EducationList as an array item
// that has all the details of ONE Education instance.

// then when "Add New" is clicked, the display Education component
// will read the contents of each education object in EducationList, and
// render the display of it