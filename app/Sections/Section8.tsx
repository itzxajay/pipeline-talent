import React, { useState } from 'react';
import Image from 'next/image';
import icon from '@/app/Assets/icon.png'; // Your mail icon image

export const Section8 = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Email validation function
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern
        return regex.test(email);
    };

    const handleSignUp = () => {
        if (validateEmail(email)) {
            setIsSubmitted(true);
            setError(''); // Clear error if valid email
        } else {
            setError('Please enter a valid email address.');
        }
    };

    return (
        <div id="section8" className='py-20 px-4 md:px-10 lg:px-16 h-auto'>
            <div className='bg-primary w-full h-full rounded-3xl flex flex-col lg:flex-row justify-between items-center py-10 px-6 md:px-10'>
                <div className='w-full lg:w-2/3 flex flex-col gap-4'>
                    <div className='text-secondary font-bold text-2xl lg:text-3xl'>
                        Unlock Exclusive Benefits as an Early Bird!
                    </div>
                    <div className='text-gray-400 text-sm lg:text-base'>
                        Be among the first to experience Pipeline talent and enjoy exclusive perks tailored just for you.
                    </div>

                    {!isSubmitted ? (
                        <>
                            {/* Email input and signup button */}
                            <div className='w-full flex items-center mt-8 bg-primary border border-[#F4DC9A] rounded-[15px] max-w-full md:max-w-[450px] lg:max-w-[600px]'>
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 h-[45px] md:h-[50px] lg:h-[55px] px-4 md:px-5 lg:px-6 text-sm md:text-base lg:text-lg text-gray-300 bg-primary border-none rounded-l-[15px] focus:outline-none"
                                />
                                <button
                                    onClick={handleSignUp}
                                    className='h-[45px] md:h-[50px] lg:h-[55px] w-[110px] md:w-[120px] lg:w-[130px] bg-[#F4DC9A] text-primary font-bold text-sm md:text-base lg:text-lg rounded-r-[15px] whitespace-nowrap'
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Error message for invalid email */}
                            {error && (
                                <div className="text-red-500 mt-2">
                                    {error}
                                </div>
                            )}
                        </>
                    ) : (
                        // Confirmation message after successful signup
                        <div className='w-full flex items-center mt-8 bg-primary rounded-[15px] max-w-full md:max-w-[450px] lg:max-w-[600px] p-4'>
                            <Image 
                                src={icon} 
                                alt="confirmation icon" 
                                className='mr-4 w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]'
                            />
                            <span className='text-white font-bold'>Thank you for signing up. You will receive an email for the access.</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
