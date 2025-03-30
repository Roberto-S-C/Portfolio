import React, { useEffect } from 'react';

function Alert({ status, showAlert, setShowAlert }) {
    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 2000);

            return () => clearTimeout(timer);
        }

    }, []);

    return (
        <div className='absolute top-20 mx-auto'>
            {status ? (
                <span
                    id='alert-success'
                    className='p-3 text-2xl md:text-3xl rounded-md'
                >
                    Message sent successfully &#x2705;
                </span>
            ) : (
                <span
                    id='alert-failure'
                    className='p-3 text-2xl md:text-3xl rounded-md'
                >
                    Message couldn't be sent &#x274C;
                </span>
            )}
        </div>
    );
}

export default Alert;