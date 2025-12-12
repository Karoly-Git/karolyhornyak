import { useNavigate, useLocation } from "react-router-dom";

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
                <a
                    href={facebookShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                >
                    Facebook
                </a>

                <a
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
