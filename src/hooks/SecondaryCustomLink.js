import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function SecondaryCustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={match ? 'text-secondary-500 font-bold' : "text-primary-700"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default SecondaryCustomLink;