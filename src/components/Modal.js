import React from 'react';
import { MdClose } from "react-icons/md";

const Modal = ({ modal, handleModal }) => {
    return (

        <section className='modal'>
            <div className={"modal__container" + (modal ? " modal__active" : "")}>
                <img src="./assets/images/coming-soon.png" alt="Image" />
                <p>We are not yet ready to give you full access to our content. We will be launching soon.
                    Please check back with us then.</p>
                <button className='close' onClick={handleModal}>
                    <MdClose />
                </button>
            </div>
        </section>


    );
}

export default Modal;
