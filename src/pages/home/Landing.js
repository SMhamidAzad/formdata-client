import React from 'react';
import bucketgirl from '../../asssets/images/bucketgirl.png'

const Landing = () => {
    return (
        <div className='relative'>
        <div class="hero h-screen lg:h-[60vh] bg-accent mt-16 relative z-10">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <p className='text-xl'>Best Quality</p>
                    <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                    <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <div className='h-[60vh] shrink-0'>
                <img src={bucketgirl} alt="" className='h-full'/>

                </div>
            </div>
        </div>
        <div className='shadow-lg mx-auto p-10 relative z-10 rounded-2xl w-5/6 mt-[-50px] bg-base-200'>
            <h1 className='text-primary mb-5 text-2xl'>Get Free Estimate</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full" />
            </div>
            <button className='btn btn-primary mt-5'>Get a Quote</button>
        </div>
        </div>
    );
};

export default Landing;