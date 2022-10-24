import React from 'react';

const HeroSection = ({ handleModal }) => {
    return (
        <section className='hero'>
            <div className="hero__container">
                <h1>Applying to universities doesn&apos;t have to be stressful.</h1>
                <p className="primary-text">Chase your dreams! Apply to any university from around the world and manage them all in <a onClick={handleModal}>Migonest</a></p>
                <button className='hero__cta' onClick={handleModal}>Get Started</button>
            </div>
        </section>
    );
}

export default HeroSection;
