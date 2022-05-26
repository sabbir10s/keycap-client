import React from 'react';
import profile from '../../../src/images/profile.png'
import projectOne from '../../../src/images/project-1.png'
import projectTwo from '../../../src/images/project-2.png'
import projectThree from '../../../src/images/project-3.png'
import Footer from '../../components/Footer';

const Portfolio = () => {
    return (
        <div className='bg-base-200 pt-5 pb-10 px-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='bg-base-100 rounded-xl shadow-lg'>
                    <div className='bg-gray-300 rounded-t-xl'>
                        <img className='w-[350px] mx-auto' src={profile} alt="" />
                    </div>
                    <div className='px-5 pt-5'>
                        <h1 className='text-4xl text-primary font-bold'>Sabbir Ahmed</h1>
                        <div className='mt-3'>
                            <p>Front End Developer</p>
                            <p>Comilla, Bangladesh</p>
                            <p>sabbirahmed1023@gmail.com</p>
                            <p>0157175891</p>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-2xl text-primary font-bold'>Skills</h2>
                            <div className='mt-3'>
                                <p>Javascript</p>
                                <progress className="progress progress-success w-56 bg-base-200 " value="80" max="100"></progress>
                                <p>React.js</p>
                                <progress className="progress progress-success w-56 bg-base-200 " value="70" max="100"></progress>

                                <p>HTML and CSS</p>
                                <progress className="progress progress-success w-56 bg-base-200 " value="85" max="100"></progress>
                                <p>Bootstrap</p>
                                <progress className="progress progress-success w-56 bg-base-200 " value="95" max="100"></progress>
                                <p>tailwindcss</p>
                                <progress className="progress progress-success w-56 bg-base-200 " value="95" max="100"></progress>
                                <p>Firebase</p>
                                <progress className="progress progress-success w-56 bg-base-200 " value="90" max="100"></progress>
                                <p>MongoDB</p>
                                <progress className="progress progress-success w-56 bg-base-200 " value="65" max="100"></progress>
                            </div>
                        </div>

                        <div className='my-3'>
                            <h2 className='text-2xl text-primary font-bold'>Languages</h2>
                            <div className='mt-3'>
                                <p>Bangla</p>
                                <progress className="progress progress-success w-56 bg-base-200 " value="100" max="100"></progress>
                                <p>English</p>
                                <progress className="progress progress-success w-56 bg-base-200 " value="70" max="100"></progress>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-span-2 bg-base-100 p-7 rounded-xl shadow-lg'>
                    <div>
                        <h2 className='text-2xl font-bold text-primary uppercase'>My Projects</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5'>
                            <div className='flex justify-center items-center'>
                                <a href="https://bike-pro-d5b3f.web.app/" target="_blank">
                                    <div className='border-2 border-success'>
                                        <img className='w-[300px]' src={projectOne} alt="BikePro Project" />
                                        <p className='text-xl text-center bg-success text-base-100 py-2'>Project BikePro</p>
                                    </div>
                                </a>
                            </div>
                            <div className='flex justify-center items-center'>
                                <a href="https://home-flavor-6e5a5.web.app/" target="_blank">
                                    <div className='border-2 border-success'>
                                        <img className='w-[300px]  h-[200px]' src={projectTwo} alt="BikePro Project" />
                                        <p className='text-xl text-center bg-success text-base-100 py-2'>Project Home Flavor</p>
                                    </div>
                                </a>
                            </div>
                            <div className='flex justify-center items-center'>
                                <a href="https://624b3170a2a95710c75994a5--capable-donut-009996.netlify.app/" target="_blank">
                                    <div className='border-2 border-success'>
                                        <img className='w-[300px] h-[200px]' src={projectThree} alt="BikePro Project" />
                                        <p className='text-xl text-center bg-success text-base-100 py-2'>Project TimeO</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h2 className='text-2xl font-bold text-primary uppercase mt-10'>Education</h2>
                    <div className='mt-3'>
                        <h3 className='text-xl'>Diploma in Computer Engineering</h3>
                        <p className='text-success font-bold my-1'>2014 - 2015</p>
                        <h3 className='text-medium text-base-300'>Comilla Polytechnic Institute</h3>
                    </div>
                    <div className="divider"></div>
                    <div className='mt-3'>
                        <h3 className='text-xl'>Secondary School Certificate</h3>
                        <p className='text-success font-bold my-1'>2013 - 2014</p>
                        <h3 className='text-medium text-base-300'>Baburhat High School And College</h3>
                    </div>
                    <h2 className='text-2xl font-bold text-primary uppercase mt-10'>Skill Training</h2>
                    <div className='mt-3'>
                        <h3 className='text-xl'>Complete Web Development</h3>
                        <p className='text-success font-bold my-1'>2022</p>
                        <h3 className='text-medium text-base-300'>Programming Hero</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;