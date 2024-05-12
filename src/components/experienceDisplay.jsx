
export function ExperienceDisplay({experienceData}) {

    return (
        <div className="experience-display-container">
            <h2 className="experience-title">Experience</h2>

            <div className="experience-details">
                {experienceData.map((experience) => {
                    return (
                        <div key={experience.id} className="experience-display">
                            {/* style the below:*/}
                            <p className="employer-info-display">
                                <span className="employer-display">{experience.employer}</span> - <span className="role-display">{experience.role}</span>
                            </p>
                            <p className="employer-dates-display">
                                {experience.startDate} - {experience.endDate}
                            </p>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}