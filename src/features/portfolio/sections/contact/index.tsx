import { useRef, useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";

import "../sections.scss";
import "./contact.scss";

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

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
        setStatusMessage(null);

        const isLocal =
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1";

        const baseUrl = isLocal
            ? "http://localhost:8000"
            : "https://karoly-hornyak-8524fec94cd8.herokuapp.com";

        try {
            const response = await fetch(`${baseUrl}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setStatusMessage("✅ Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            formRef.current.reset();
        } catch (error) {
            setStatusMessage("❌ Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>

                <div className="content">
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        ref={formRef}
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
                            disabled={isSending}
                        >
                            {isSending ? "Sending..." : "Get in touch"}
                        </button>
                    </form>

                    {statusMessage && (
                        <p className="form-status">{statusMessage}</p>
                    )}
                </div>
            </div>
        </section>
    );
}