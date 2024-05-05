import dropArrow from '../assets/drop-arrow.png';

export function InfoInput({ infoDetails, onChange }) {
    console.log(infoDetails)
    console.log(onChange);
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
                        onChange={(e) => {
                            onChange("fullName", e.target.value)
                        }}
                    />

                    <label htmlFor="info-email">Email:</label>
                    <input 
                        type="text" 
                        id="info-email" 
                        name='info-email'
                        value={infoDetails.email}
                        onChange={(e) => {
                            onChange("email", e.target.value)
                        }}
                    />

                    <label htmlFor="info-phone">Phone:</label>
                    <input 
                        type="text" 
                        id="info-phone" 
                        name='info-phone'
                        value={infoDetails.phone}
                        onChange={(e) => {
                            onChange("phone", e.target.value)
                        }}
                    />

                    <label htmlFor="info-location">Location:</label>
                    <input 
                        type="text" 
                        id="info-location" 
                        name='info-location'
                        value={infoDetails.location}
                        onChange={(e) => {
                            onChange("location", e.target.value)
                        }}
                    />


                    <button className='submit-info' onSubmit={submitInfo}>Save</button>
                </form>
                

            </div>
        </>
    )
}