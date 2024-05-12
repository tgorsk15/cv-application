

export function InfoDisplay({ infoDetails }) {


    return (
        <div className="info-display-container">
            <h2 className="info-title">{infoDetails.fullName}</h2>
            <div className="info-details">
                
                <h4>
                    <label htmlFor="">Email:</label>
                    {infoDetails.email}
                </h4>
                <h4>
                    <label htmlFor="">Phone:</label>
                    {infoDetails.phone}
                </h4>
                <h4>
                    <label htmlFor="">Location:</label>
                    {infoDetails.location}
                </h4>
            </div>
            <div className="social-container">
                <p className="linked-in"><i className="devicon-linkedin-plain"></i> Jack Sparrow</p>
                <p className="git-hub"><i className="devicon-github-original"></i> wallaby4040</p>
                <p></p>
            </div>
        </div>
    )

}