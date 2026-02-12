import { useRef, useState, useEffect } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import { motion as m, useInView } from "framer-motion";
import EmailStatusModal from "@/features/email/components/EmailStatusModal";

type ModalStyle = {
    modalIndex: number;
    modalBgColor: React.CSSProperties["backgroundColor"];
    contentOpacity: number;
    contentTop: React.CSSProperties["top"];
};

const sectionVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Contact() {
    const h2Ref = useRef<HTMLHeadingElement | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [modalStyle, setModalStyle] = useState<ModalStyle>({
        modalIndex: -20000,
        modalBgColor: "transparent",
        contentOpacity: 0,
        contentTop: "3rem",
    });

    const [hasAnimated, setHasAnimated] = useState({
        h2: false,
        form: false,
    });

    const h2InView = useInView(h2Ref, { once: true, amount: 0.1 });
    const formInView = useInView(formRef, { once: true, amount: 0.1 });

    useEffect(() => {
        if (h2InView && !hasAnimated.h2) {
            setHasAnimated((prev) => ({ ...prev, h2: true }));
        }
    }, [h2InView, hasAnimated.h2]);

    useEffect(() => {
        if (formInView && !hasAnimated.form) {
            setHasAnimated((prev) => ({ ...prev, form: true }));
        }
    }, [formInView, hasAnimated.form]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!formRef.current) return;

        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity();
            return;
        }

        setIsSending(true);

        const isLocal =
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1";

        const baseUrl = isLocal
            ? "http://localhost/karolyhornyak.com/"
            : "http://karolyhornyak.com/";

        try {
            const response = await fetch(baseUrl + "backend/php/send-form.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            setIsSending(false);
            setIsSuccess(response.ok);
        } catch {
            setIsSending(false);
            setIsSuccess(false);
        }
    }

    function handleCloseClick() {
        setIsSending(false);
        setIsSuccess(false);

        setModalStyle({
            modalIndex: -20000,
            modalBgColor: "transparent",
            contentOpacity: 0,
            contentTop: "3rem",
        });
    }

    function resetFormAndData() {
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        formRef.current?.reset();
    }

    return (
        <>
            <section id="contact">
                <div className="container">
                    <h2 ref={h2Ref}>Contact Me</h2>

                    <div className="content">
                        <m.form
                            className="contact-form"
                            onSubmit={handleSubmit}
                            ref={formRef}
                            initial="initial"
                            animate={hasAnimated.form ? "animate" : "initial"}
                            variants={sectionVariants}
                            noValidate
                        >
                            <label htmlFor="name">Name:</label>
                            <input
                                required
                                onChange={handleChange}
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                            />

                            <label htmlFor="email">Email:</label>
                            <input
                                required
                                onChange={handleChange}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                            />

                            <label htmlFor="subject">Subject:</label>
                            <input
                                required
                                onChange={handleChange}
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                            />

                            <label htmlFor="message">Message:</label>
                            <textarea
                                required
                                onChange={handleChange}
                                id="message"
                                name="message"
                                value={formData.message}
                            />

                            <button
                                type="submit"
                                className="btn"
                                onClick={() => {
                                    if (!formRef.current) return;

                                    if (formRef.current.checkValidity()) {
                                        setModalStyle({
                                            modalIndex: 20000,
                                            modalBgColor: "rgba(0, 0, 0, 0.8)",
                                            contentOpacity: 1,
                                            contentTop: "4rem",
                                        });
                                    } else {
                                        formRef.current.reportValidity();
                                    }
                                }}
                            >
                                Get in touch
                            </button>
                        </m.form>
                    </div>
                </div>
            </section>

            {/*<EmailStatusModal
                isSending={isSending}
                isSuccess={isSuccess}
                modalStyle={modalStyle}
                handleCloseClick={handleCloseClick}
                resetFormAndData={resetFormAndData}
            />*/}
        </>
    );
}
