import dropArrow from '../assets/drop-arrow.png';

export function InfoInput({ infoDetails, onChange }) {
    console.log(infoDetails)
    const arrowIcon = new Image()
    arrowIcon.src = dropArrow;

    // use this for expanding and contracting form:
    // function toggleForm() {

    // }

    function submitInfo(e) {
        e.preventDefault();
    }

    return (
        <>
            <h2 className="info-header">About You</h2>
            <button className="dropdown-button">
                {/* not working... need to come back to this: */}
                {/* {arrowIcon} */}
            </button>
            
            <div className="info-inputs-container">

                <form action="push">
                    <label htmlFor="info-name">Full Name:</label>
                    <input 
                        type="text" 
                        id="info-name"
                        name='info-name' 
                        value={infoDetails.fullName}
                    />

                    <label htmlFor="info-email">Email:</label>
                    <input type="text" id="info-email" name='info-email'/>

                    <label htmlFor="info-phone">Phone:</label>
                    <input type="text" id="info-phone" name='info-phone'/>

                    <label htmlFor="info-location">Location:</label>
                    <input type="text" id="info-location" name='info-location'/>

                    <label htmlFor="info-website">Website</label>
                    <input type="text" id="info-website" name='info-website'/>

                    <label htmlFor="info-LinkedIn">LinkedIn</label>
                    <input type="text" id="info-LinkedIn" name='info-LinkedIn'/>

                    <button className='submit-info' onSubmit={submitInfo}>Save</button>
                </form>
                

            </div>
        </>
    )
}