import dropArrow from '../assets/drop-arrow.png';

export function InfoInput({ infoDetails, onChange }) {
    const arrowIcon = new Image()
    arrowIcon.src = dropArrow;


    return (
        <>
            <h2 className="info-header">About You</h2>
            
            <div className="info-inputs-container">

                <form action="push" className='info-form'>
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

                </form>
                

            </div>
        </>
    )
}