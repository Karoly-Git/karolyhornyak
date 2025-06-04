import React, { useRef, useState, useEffect } from 'react';
import { motion as m, useInView } from 'framer-motion';
import EmailStatusModal from '../EmailStatusModal';

const sectionVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function Contact({ contactRef }) {
    const h2Ref = useRef(null);
    const formRef = useRef(null);

    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [modalStyle, setModalStyle] = useState({
        modalIndex: -20000,
        contentOpacity: '10%',
        contentTop: '3rem'
    });

    const [hasAnimated, setHasAnimated] = useState({
        h2: false,
        form: false
    });

    const h2InView = useInView(h2Ref, { triggerOnce: true, threshold: 0.1 });
    const formInView = useInView(formRef, { triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (h2InView && !hasAnimated.h2) {
            setHasAnimated(prev => ({ ...prev, h2: true }));
        }
    }, [h2InView, hasAnimated.h2]);

    useEffect(() => {
        if (formInView && !hasAnimated.form) {
            setHasAnimated(prev => ({ ...prev, form: true }));
        }
    }, [formInView, hasAnimated.form]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setIsSending(true);

        const isLocal = false;
        const baseUrl = isLocal ? 'http://localhost/karolyhornyak.co.uk/' : 'http://karolyhornyak.co.uk/';

        try {
            const response = await fetch(baseUrl + 'backend/php/send-form.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // After getting the response, update the modal based on success or failure
            if (response.ok) {
                //console.log('Email Ok');
                setIsSending(false);
                setIsSuccess(true);
            } else {
                //console.log('Email Error');
                setIsSending(false);
                setIsSuccess(false);
            }
        } catch (error) {
            //console.error('Error:', error);
            setIsSending(false);
            setIsSuccess(false);
        }
    }

    function handleCloseClick() {
        setIsSending(false);
        setIsSuccess(false);
        setModalStyle({
            modalIndex: -20000,
            contentOpacity: '10%',
            contentTop: '3rem'
        })
    }

    function resetFormAndData() {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <>
            <section id="contact" ref={contactRef}>
                <div className="container">
                    {false && <m.h2 ref={h2Ref} initial="initial" animate={hasAnimated.h2 ? "animate" : "initial"} variants={sectionVariants}>
                        Contact Me
                    </m.h2>}

                    <h2>
                        Contact Me
                    </h2>

                    <m.form onSubmit={handleSubmit} ref={formRef} initial="initial" animate={hasAnimated.form ? "animate" : "initial"} variants={sectionVariants}>
                        <label htmlFor="name">Name:</label>
                        <input
                            required
                            onChange={handleChange}
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name} // Bind the input value to the state
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            required
                            onChange={handleChange}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email} // Bind the input value to the state
                        />

                        <label htmlFor="subject">Subject:</label>
                        <input
                            required
                            onChange={handleChange}
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject} // Bind the input value to the state
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            required
                            onChange={handleChange}
                            id="message"
                            name="message"
                            value={formData.message} // Bind the input value to the state
                        ></textarea>

                        <button
                            type="submit"
                            className="btn"
                            onClick={() => {
                                setModalStyle({
                                    modalIndex: 20000,
                                    contentOpacity: '100%',
                                    contentTop: '4rem'
                                })
                            }}>
                            Send Message
                        </button>
                    </m.form>
                </div>
            </section>
            <EmailStatusModal
                isSending={isSending}
                isSuccess={isSuccess}
                modalStyle={modalStyle}
                handleCloseClick={handleCloseClick}
                resetFormAndData={resetFormAndData}
                setModalStyle={setModalStyle}
            />
        </>
    );
}
