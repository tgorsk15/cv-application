import dropArrow from '../assets/drop-arrow.png';

export function InfoInput() {
    const arrowIcon = new Image()
    arrowIcon.src = dropArrow;

    return (
        <>
            <h2 className="info-header">About You</h2>
            <button className="dropdown-button">
                {/* not working... need to come back to this: */}
                {/* {arrowIcon} */}
            </button>
            <div className="info-inputs-container">
                <input type="text" className="info-name"/>
                <input type="text" className="info-email"/>
                <input type="text" className="info-phone"/>
                <input type="text" className="info-git"/>
                <input type="text" className="info-website"/>
                <input type="text" className="info-LinkedIn"/>

            </div>
        </>
    )
}