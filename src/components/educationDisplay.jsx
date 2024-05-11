

export function EducationDisplay({ educationData }) {

    return (
        
        <div className="education-display-container">
            <h2 className="education-title">Education</h2>

            <div className="education-details">
                {educationData.map((education) => {
                    return (
                        <div key={education.id} className="education-display">
                            <p className="school-info-display">
                                <span className="school-display">{education.school}</span> - <span className="study-display">{education.studyLevel}</span>
                            </p>
                            <p className="education-dates-display">
                                {education.startDate} - {education.endDate}
                            </p>
                        </div>
                        
                    )
                })}
                
            </div>
        </div>

    )
    

}