import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function DashLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={match ? 'text-error font-bold' : "text-primary"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default DashLink;