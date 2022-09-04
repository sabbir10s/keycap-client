import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                // style={{ color: match ? "#3860BE" : "black", fontWeight: match ? "bold" : "normal" }}
                className={match ? 'text-error font-bold border-b-4 pb-5 border-error px-5' : "text-primary px-5"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;