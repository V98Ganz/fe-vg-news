import React from 'react';

const ErrorPage = ({ status, msg }) => {
    return (
        <div>
            <p>
                {status} - {msg}
            </p>
        </div>
    );
};

export default ErrorPage;