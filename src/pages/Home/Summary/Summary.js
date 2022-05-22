import React from 'react';
import { GiStarsStack } from 'react-icons/gi';

const Summary = () => {
    return (
        <div class="stats shadow flex mx-12 my-12">

            <div class="stat">
                <div class="stat-figure text-success">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> */}
                    <svg className='w-[50px]' xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                </div>
                <div class="stat-title text-2xl text-success">Happy Clients</div>
                <div class="stat-value text-success text-5xl my-2">25.6K</div>
                <div class="stat-desc text-lg">15% more than last year</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-success">
                    <svg className='w-[50px]' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>
                <div class="stat-title text-2xl text-success">Annual revenue</div>
                <div class="stat-value text-success text-5xl my-2">2.6M</div>
                <div class="stat-desc text-lg">21% more than last year</div>
            </div>
            <div class="stat">
                <div class="stat-figure text-success text-5xl">
                    <GiStarsStack />
                </div>
                <div class="stat-title text-2xl text-success">Reviews</div>
                <div class="stat-value text-success text-5xl my-2">2.6K</div>
                <div class="stat-desc text-lg">8% more than last month</div>
            </div>
        </div>
    );
};

export default Summary;