import { useState } from 'react';
import dropArrow from '../assets/drop-arrow.png';


export function ExperienceInput ({experienceData}) {
    const arrowIcon = new Image()
    arrowIcon.src = dropArrow;

    const [tempExperienceData, setTempData] = useState(experienceData)

    function storeExperienceInputs() {
        console.log('stored bitch')
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
                    console.log(experience.employer)
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
                        </form>
                    )

                })}
            </div>
    </>
)

}