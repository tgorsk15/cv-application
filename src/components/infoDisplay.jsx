

export function InfoDisplay({ infoDetails }) {


    return (
        <div className="info-display-container">
            <h2>{infoDetails.fullName}</h2>
            <div className="info-details">
                <h4>{infoDetails.email}</h4>
                <h4>{infoDetails.phone}</h4>
                <h4>{infoDetails.location}</h4>
            </div>
        </div>
    )

}