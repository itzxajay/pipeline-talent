import React, { useState } from 'react';

export const Section4 = () => {
    return (
        <div className='px-4 md:px-10 pt-10 pb-20 sm:pb-32 text-white bg-primary mx-4 md:mx-10 text-center rounded-t-3xl h-auto'>
            <Section4And5Header title={"Glimpse of our Job Seeker App"} slogan={"Discover Your Dream Job with Pipeline Talent"} />
            <Section />
        </div>
    );
};

export function Section4And5Header(props: { title: string, slogan: string }) {
    return (
        <div className='w-full'>
            <div className='w-full text-2xl md:text-3xl font-bold pb-4'>{props.title}</div>
            <div className='w-full text-base md:text-lg'>
                {props.slogan}
            </div>
        </div>
    );
}

export function Section() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center pt-10 md:pt-20'>
            <div className='w-full md:w-1/2'>
                {/* You can add any additional content or images here */}
            </div>
            <div className='w-full md:w-1/2'>
                <FAQ 
                    ques={"AI-Powered Matching"} 
                    ans={"Our advanced AI algorithms analyze job listings and your profile to suggest the most relevant positions, saving you time and effort in your job search."} 
                />
                <FAQ 
                    ques={"Seamless Application Process"} 
                    ans={"Navigate the job market effortlessly with our streamlined application process. Say goodbye to endless forms and hello to simplicity. Apply to your dream job with just a few clicks-saving you time and stress."} 
                />
                <FAQ 
                    ques={"Career Insights and Guidance"} 
                    ans={"Empower your career with our comprehensive insights and expert guidance. Gain valuable industry knowledge, explore career paths, and stay ahead with personalized advice."} 
                />
            </div>
        </div>
    );
}

export function FAQ(props: { ques: string, ans: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col text-start gap-4 pb-6'>
            <div 
                className='text-lg font-bold cursor-pointer flex justify-between items-center'
                onClick={toggleOpen}
            >
                {props.ques}
                <span 
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12.293l6.293-6.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L10 12.293z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </div>
            {isOpen && (
                <div className='text-sm'>
                    {props.ans}
                </div>
            )}
            <div className={`h-[1px] w-full bg-white ${isOpen ? 'mt-4' : ''}`}></div>
        </div>
    );
}
