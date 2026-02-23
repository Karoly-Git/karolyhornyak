export default function Spinner({ size = 50, color = "rgb(0, 0, 0)" }) {
    const dimension =
        typeof size === "number" ? `${size}px` : size;

    return (
        <div
            className="spinner"
            style={{ width: dimension, height: dimension, margin: 'auto' }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
            >
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={color}
                    strokeWidth="4"
                    opacity="0.3"
                />

                {/* Animated circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={color}
                    strokeWidth="4"
                    strokeDasharray="62.83185307179586"
                    strokeDashoffset="62.83185307179586"
                    strokeLinecap="round"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="strokeDashoffset"
                        values="62.83185307179586;0;62.83185307179586"
                        keyTimes="0;0.5;1"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        </div>
    );
}