

export function EducationDisplay({ educationData }) {

    return (
        
        <div className="education-display-container">
            <h2>Education</h2>

            <div className="education-details">
                {educationData.map((education) => {
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