import React from 'react';

// Components
import ImageHeader from '../components/imageHeader/ImageHeader';

const Confirmation = () => {
    return (
        <div>
            <ImageHeader title='Congrats! Pizza is on its way!' />

            <br /><br /><br />
            <h1>
                <center>Arriving in 20 minutes!</center>
            </h1>
        </div>
    )
}

export default Confirmation;