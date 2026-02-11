import React from 'react';

import { FaCheckCircle as EmailOkIcon } from "react-icons/fa";
import { MdError as EmailErrorIcon } from "react-icons/md";
import { SiMinutemailer as EmailSendingIcon } from "react-icons/si";
import { IoMdClose as CloseIcon } from "react-icons/io";

export default function EmailStatusModal(props) {

    const { isSending, isSuccess, modalStyle, handleCloseClick, resetFormAndData } = { ...props }


    return (
        <div className='modal' style={{ zIndex: modalStyle.modalIndex, backgroundColor: modalStyle.modalBgColor }}>
            <div className='modal-content' style={{ opacity: modalStyle.contentOpacity, top: modalStyle.contentTop }}>
                <div className='modal-header'>
                    <div className='modal-title'>
                        {isSending ? < EmailSendingIcon className='icon' /> : isSuccess ? < EmailOkIcon className='icon success' /> : < EmailErrorIcon className='icon error' />}
                        {isSending ? <span>Sending Email...</span> : isSuccess ? <span className='success'>Message sent successfully</span> : <span className='error'>Ooops...</span>}
                    </div>
                    {!isSending &&
                        <CloseIcon className='icon close-icon' onClick={() => {
                            handleCloseClick();
                            if (isSuccess) {
                                resetFormAndData();
                            }
                        }}
                        />}
                </div>
                <div className='modal-body'>
                    {isSending ? (
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
                    ) : isSuccess ? (
                        <div>
                            <div style={{ marginBottom: '5px' }}>
                                Thank you for your message, I will get back to you shortly!
                            </div>
                            <div>
                                You can close this window now.
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div style={{ marginBottom: '5px' }}>
                                Error occurred while sending message!
                            </div>
                            <div>
                                Please close this window, and try again.
                            </div>
                        </div>
                    )}
                </div>
                <div className='modal-footer'>
                    {isSending ? <span>Sending Email...</span> : isSuccess ? <span className='success'>Success</span> : <span className='error'>Error</span>}
                </div>
            </div>
        </div>
    );
}
