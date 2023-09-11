import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function SecondaryCustomLink({ children, handleMobileSidebar, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                onClick={handleMobileSidebar}
                className={match ? 'text-secondary-500 block text-left' : "block text-left text-primary-700 hover:text-secondary-500 duration-300"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default SecondaryCustomLink;