import React from 'react';

const BlogPostFour = () => {
    return (
        <div className='mt-10 max-w-lg'>
            <h1 className='text-3xl text-primary font-bold mt-5'>Why you do not set the state directly in React</h1>
            <p>
                If you try to update state directly then it won't re-render the component.
            </p>
            <code>this.state.message = 'Hello world'</code>
            Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.
            You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.
        </div>
    );
};

export default BlogPostFour;