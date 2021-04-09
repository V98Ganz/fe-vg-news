import React from 'react';

const ErrorPage = ({ status, msg }) => {
    return (
        <main>
            <p>
                {status} - {msg}
            </p>
        </main>
    );
};

export default ErrorPage;