import React from 'react';
import prototype from '../.././images/blog/prototype.png';
import prototype2 from '../.././images/blog/prototypeinheritanceexample.jpg';

const BlogPostThree = () => {
    return (
        <div className='mt-10 max-w-lg'>
            <h1 className='text-3xl text-primary font-bold'> How does prototypical inheritance work?</h1>
            <img className='w-[500px] mt-5' src={prototype} alt="" />
            <div className='mt-5'>
                <div>
                    <p className='font-bold text-xl'>Prototype Inheritance in JavaScript:</p>
                    <div>
                        <p className='mt-1'>
                            Under the classical inheritance phenomenon, we create a new class that actually extends or reuses the properties or functions, or methods of another class that are used by several programming languages (like C, C++, Java, etc.</p>
                        <p className='mt-2'>
                            JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance.
                            In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage.
                        </p>
                        <p className='mt-2'>
                            All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on)
                        </p>
                        <p className='mt-2'>
                            Following pictorial representation, containing some sample values will help us to understand Prototype Inheritance in a much better and effective way-
                        </p>
                    </div>
                    <img className='w-[300px] mt-5' src={prototype2} alt="" />
                    <div>
                        <p>
                            In the above pictorial representation, we have taken an example to illustrate the Prototype Inheritance between a rabbit and another create prototype object which is an animal.</p>
                        <p>
                            We will set the rabbit’s prototype object as an animal prototype object wherein we will store all the values of rabbit for a purpose that if in the case in while rabbit properties are missing then JavaScript will automatically take it from animal prototype object.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogPostThree;