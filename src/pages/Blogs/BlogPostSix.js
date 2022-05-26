import React from 'react';


const BlogPostSix = () => {
    return (
        <div className='mt-10 max-w-lg'>
            <h1 className='text-3xl text-primary font-bold'> What is a unit test? Why should write unit tests?</h1>
            <div className='mt-5'>
                <div>
                    <p>
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test." <br />

                        Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks created by Kent Beck, and a reference in chapter 5 of The Art of Software Testing . Before that, it's mostly a mystery. I asked Jerry Weinberg about his experiences with unit testing -- "We did unit testing in 1956. As far as I knew, it was always done, as long as there were computers". <br />

                        Regardless of when and where unit testing began, one thing is for sure. Unit testing is here to stay. Let's look at some more practical aspects of unit testing.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default BlogPostSix;