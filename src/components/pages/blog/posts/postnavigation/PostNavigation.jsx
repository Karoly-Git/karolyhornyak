import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import './PostNavigation.css';

export default function PostNavigation({ title }) {
    const navigate = useNavigate();
    const location = useLocation();

    const currentUrl = `${window.location.origin}${location.pathname}`;

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

    return (
        <div className="post-navigation">
            <button
                className="back-button"
                onClick={() => navigate(-1)}
                aria-label="Go back"
            >
                ← Back
            </button>

            <div className="share-buttons">
                <span className="share-label">Share</span>

                <a
                    href={facebookShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    title="Share on Facebook"
                >
                    <FaFacebookF />
                </a>

                <a
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    title="Share on LinkedIn"
                >
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    );
}
