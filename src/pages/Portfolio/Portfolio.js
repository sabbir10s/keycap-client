import React from 'react';
import profile from '../../../src/images/profile.png'
import projectOne from '../../../src/images/project-1.png'
import projectTwo from '../../../src/images/project-2.png'
import projectThree from '../../../src/images/project-3.png'
import Footer from '../../components/Footer';
import { MdDeveloperMode } from 'react-icons/md';
import { MdLocationPin } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { MdModelTraining } from 'react-icons/md';


const Portfolio = () => {
    return (
        <div className='bg-base-100 lg:mt-7 lg:px-10'>
            <div className='grid grid-cols-1 pb-10 lg:grid-cols-3 lg:gap-5'>
                <div className='bg-base-100 pb-5 rounded-xl shadow-xl'>
                    <div className='bg-gray-300 rounded-t-xl'>
                        <img className='w-[350px] mx-auto' src={profile} alt="" />
                    </div>
                    <div className='px-5 pt-5'>
                        <h1 className='text-4xl text-primary font-bold'>Sabbir Ahmed</h1>
                        <div className='mt-3'>
                            <div className='flex items-center gap-2 text-lg'>
                                <span className='text-success'><MdDeveloperMode /></span>
                                <span>Front End Developer</span>
                            </div>
                            <div className='flex items-center gap-2 text-lg my-1'>
                                <span className='text-success'><MdLocationPin /></span>
                                <span>Comilla, Bangladesh</span>
                            </div>
                            <div className='flex items-center gap-2 text-lg'>
                                <span className='text-success'><MdEmail /></span>
                                <span>sabbirahmed1023@gmail.com</span>
                            </div>

                            <div className='flex items-center gap-2 text-lg my-1'>
                                <span className='text-success'><BsTelephoneFill /></span>
                                <span>0157175891</span>
                            </div>

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
                <div className=' col-span-2 bg-base-100 p-7 rounded-xl shadow-xl'>
                    <div>
                        <div className=' font-bold text-primary uppercase flex items-center gap-2'>
                            <span className='text-3xl'><MdWork /></span>
                            <span className='text-2xl'>My Projects</span>
                        </div>
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
                                <a href="https://melodic-mochi-157db8.netlify.app/" target="_blank">
                                    <div className='border-2 border-success'>
                                        <img className='w-[300px] h-[200px]' src={projectThree} alt="BikePro Project" />
                                        <p className='text-xl text-center bg-success text-base-100 py-2'>Project TimeO</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='text-2xl font-bold text-primary uppercase mt-10 flex items-center gap-2'>
                        <svg className='w-[40px]' xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <p>Education</p>
                    </div>
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

                    <div className=' mt-10 font-bold text-primary uppercase flex items-center gap-2'>
                        <span className='text-3xl'><MdModelTraining /></span>
                        <span className='text-2xl'>Skill Training</span>
                    </div>
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