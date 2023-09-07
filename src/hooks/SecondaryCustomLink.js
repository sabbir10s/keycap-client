import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function SecondaryCustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={match ? 'text-secondary-500 font-bold block text-left px-4 py-2' : "text-primary-700 block text-left px-4 py-2"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default SecondaryCustomLink;