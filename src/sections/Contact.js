import React from 'react'

const Contact = ({handleModal}) => {
    return (
        <section className="contact">
            <div className="contact__container">
                <div className="contact__head">
                    <h2>Are you a university representative?</h2>
                </div>
                <div className="contact__info">
                    <div className="contact__info-content">
                        <p>Migonest can streamline the process of managing prospective student applications for your university.</p>
                        <p>Forget the time-consuming and inefficient manual selection method. Allow Migonest to automate the process for you.</p>
                    </div>
                    <div className="contact__info-cta">
                            <a onClick={handleModal}>Make Contact</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
