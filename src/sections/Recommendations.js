import React from 'react';
import SuggestedUniversities from './SuggestedUniversities';

const Recommendations = ({ handleModal }) => {
    return (
        <section className="rec">
            <div className="rec__container">
                <h2>University Recommendations</h2>
                <div className="rec__row">
                    <div className="rec__video">
                        <SuggestedUniversities handleModal={handleModal} />
                    </div>
                    <div className="rec__content">
                        <p className="secondary-text">Get tailored recommendations based on your educational background and preferences</p>
                    </div>
                </div>
            </div>
            <img src="./assets/images/atom.png" alt="Image" className='atom' />
        </section>
    );
}

export default Recommendations;
