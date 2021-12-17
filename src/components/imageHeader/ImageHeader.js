import React from 'react';

import { Link } from 'react-router-dom';

// CSS
import './ImageHeader.css';

// Assets
// import pizza from '../../assets/Pizza.jpg';

const ImageHeader = (props) => {
    const { title, button, linkTo } = props;
    return (
        <section className='image-container'>
            <div className='image-content'> 
                <div className='image-title'>{title}</div>
                {button && <Link to={linkTo}><button>{button}</button></Link>}
            </div>
        </section>
    )
}

export default ImageHeader;