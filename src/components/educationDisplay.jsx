

export function EducationDisplay({ educationData }) {
    console.log(educationData)

    return (
        
        <div className="education-display-container">
            <h2>Education</h2>

            <div className="education-details">
                {educationData.map((education) => {
                    console.log(education)
                    return (
                        <div key={education.id}>
                            <h4>{education.school}</h4>
                        </div>
                        
                    )
                })}
                
            </div>
        </div>

    )
    

}