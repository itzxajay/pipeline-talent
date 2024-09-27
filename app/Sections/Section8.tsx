import React from 'react';

export const Section8 = () => {
    return (
        <div className='py-20 px-4 md:px-10 lg:px-16 h-auto'>
            <div className='bg-primary w-full h-full rounded-3xl flex flex-col lg:flex-row justify-between items-center py-10 px-6 md:px-10'>
                <div className='w-full lg:w-2/3 flex flex-col gap-4'>
                    <div className='text-secondary font-bold text-2xl lg:text-3xl'>
                        Unlock Exclusive Benefits as an Early Bird!
                    </div>
                    <div className='text-gray-400 text-sm lg:text-base'>
                        Be among the first to experience Pipeline talent and enjoy exclusive perks tailored just for you.
                    </div>
                    <div className='w-full flex items-center mt-8 bg-primary border border-[#F4DC9A] rounded-[15px] max-w-full md:max-w-[450px] lg:max-w-[600px]'>
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="flex-1 h-[45px] md:h-[50px] lg:h-[55px] px-4 md:px-5 lg:px-6 text-sm md:text-base lg:text-lg text-gray-300 bg-primary border-none rounded-l-[15px] focus:outline-none"
                        />
                        <button className='h-[45px] md:h-[50px] lg:h-[55px] w-[110px] md:w-[120px] lg:w-[130px] bg-[#F4DC9A] text-primary font-bold text-sm md:text-base lg:text-lg rounded-r-[15px] whitespace-nowrap'>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
