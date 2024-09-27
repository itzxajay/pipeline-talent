"use client"; // This line marks the component as a Client Component

import Image from 'next/image';
import React from 'react';
import logo from '@/app/Assets/logo.png';

export const Section1 = ({ scenario }) => {
    const buttonText = scenario === "Job Seekers" ? "Sign Up" : "Get Started!";

    return (
        <div className='h-screen bg-primary py-4 px-4 md:px-6 lg:px-10'>
            {/* Header */}
            <div className='flex justify-between items-center'>
                <Image src={logo} alt='logo' className='w-[75px] h-auto md:w-[90px] lg:w-[105px]'/>
                <button className='bg-secondary text-primary font-bold px-6 py-2 text-sm md:px-8 md:py-3 md:text-base lg:px-10 lg:py-4 lg:text-lg rounded-lg'>
                    {buttonText}
                </button>
            </div>
            <div className='mt-16 flex flex-col lg:flex-row lg:justify-between'>
                {/* Left */}
                <div className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white w-full'>
                    <div>Next Generation Hiring</div>
                    <div className='mt-5 mb-6'>Solution with AI</div>
                    <div className='text-base md:text-lg lg:text-xl text-gray-400'>
                        Our AI-powered platform is designed to simplify and optimize every step of your recruitment journey.
                    </div>
                    <button className='bg-secondary text-primary font-bold px-6 py-2 mt-10 text-sm md:px-8 md:py-3 md:text-base lg:px-10 lg:py-4 lg:text-lg rounded-lg'>
                        {buttonText}
                    </button>
                    {/* Adding Last back */}
                    <Last />
                </div>
                {/* Right (Empty for now) */}
                <div className='w-full mt-10 lg:mt-0'></div>
            </div>
        </div>
    );
};

function Last() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 p-4 mt-3 lg:mt-3 sm:mt-3 xl:mt-14'>
            <Section t1={"4.5"} t2={"/5"} t3={"Value rated from the TrustPilot"} />

            <div className='h-[1px] md:h-full w-full md:w-[1px] bg-gray-400 justify-self-center my-4 md:my-0'> </div>

            <Section t1={"7k+"} t2={""} t3={"Trusted by leading companies"} />
        </div>
    );
}

function Section(props: { t1: string, t2: string, t3: string }) {
    return (
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <div className='flex items-baseline'>
                <div className='text-4xl md:text-5xl'>{props.t1}</div>
                <div className='text-lg md:text-xl ml-1'>{props.t2}</div>
            </div>
            <div className='text-sm text-gray-400 mt-1'>{props.t3}</div>
        </div>
    );
};
