import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={match ? 'text-secondary-500 font-bold border-b-2 pb-[23px] border-secondary-500 px-8' : "text-primary-600 px-8 border-b-0 pb-[23px]"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;