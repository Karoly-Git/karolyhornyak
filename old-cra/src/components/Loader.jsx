import React from 'react'

export default function Loader() {
    return (
        <div className='loader'>
            <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                fill="none">
                <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="4" opacity="0.3" />
                <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="4"
                    strokeDasharray="62.83185307179586" strokeDashoffset="62.83185307179586"
                    strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50"
                        dur="1s" repeatCount="indefinite" />
                    <animate attributeName="strokeDashoffset"
                        values="62.83185307179586;0;62.83185307179586" keyTimes="0;0.5;1" dur="1s"
                        repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
    )
}
