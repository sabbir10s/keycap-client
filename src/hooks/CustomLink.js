import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={match ? 'text-primary-600 font-bold border-b-2 pb-[23px] border-primary-600 px-8' : "text-gray-600 px-8 border-b-0 pb-[23px] hover:text-primary-600 duration-300"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;