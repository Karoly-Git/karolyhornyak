import { useRef, useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import "../sections.scss";
import "./contact.scss";

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "", // honeypot
    });

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
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

        if (!captchaToken) {
            setStatusMessage("❌ Please complete the reCAPTCHA.");
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
                body: JSON.stringify({
                    ...formData,
                    captchaToken,
                }),
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
                website: "",
            });

            recaptchaRef.current?.reset();
            setCaptchaToken(null);
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
                        {/* Honeypot */}
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            style={{ display: "none" }}
                            autoComplete="off"
                        />

                        <label>Name:</label>
                        <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <label>Email:</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label>Subject:</label>
                        <input
                            required
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />

                        <label>Message:</label>
                        <textarea
                            required
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />

                        <div style={{ margin: "20px 0" }}>
                            <ReCAPTCHA
                                sitekey="6LeafnQsAAAAAI4M4kh0wJJgmCPKn7PAl_CF2l_G"
                                onChange={(token: string | null) => setCaptchaToken(token)} ref={recaptchaRef}
                            />
                        </div>

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