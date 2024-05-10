

export function EducationDisplay({ educationData }) {

    return (
        
        <div className="education-display-container">
            <h2>Education</h2>

            <div className="education-details">
                {educationData.map((education) => {
                    return (
                        <div key={education.id} className="education-display">
                            <h4>{education.school}</h4>
                            <h4>{education.studyLevel}</h4>
                            <h4>{education.startDate}</h4>
                            <h4>{education.endDate}</h4>
                        </div>
                        
                    )
                })}
                
            </div>
        </div>

    )
    

}