
export function ExperienceDisplay({experienceData}) {

    return (
        <div className="experience-display-container">
            <h2 className="experience-header-display">Experience</h2>

            <div className="experience-details">
                {experienceData.map((experience) => {
                    return (
                        <div key={experience.id} className="experience-display">
                            <h4>{experience.employer}</h4>
                            <h4>{experience.role}</h4>
                            <h4>{experience.startDate}</h4>
                            <h4>{experience.endDate}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}