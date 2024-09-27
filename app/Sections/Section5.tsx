import React, { useState } from 'react';
import { Section4And5Header } from './Section4';

export const Section5 = () => {
    return (
        <div className='px-4 md:px-10 pt-10 mb-10 text-primary bg-secondary mx-4 md:mx-10 text-center rounded-b-3xl h-auto pb-10'>
            <Section4And5Header title={"Glimpse of our Recruiter App"} slogan={"Streamline Your Hiring Process with Pipeline Talent"} />
            <Section />
        </div>
    );
};

export function Section() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center pt-10 md:pt-20'>
            <div className='w-full md:w-1/2'>
                <FAQ 
                    ques={"Efficient Candidate Management"} 
                    ans={"Utilize AI-powered algorithms to automatically source and match candidates based on job requirements, saving time and ensuring you reach top talent quickly."} 
                />
                <FAQ 
                    ques={"Brand-Centric Candidate Engagement"} 
                    ans={"Create a cohesive brand experience throughout the recruitment process to attract and engage top talent."} 
                />
                <FAQ 
                    ques={"Data-Driven Decision Making"} 
                    ans={"Make informed hiring decisions backed by powerful analytics and data insights. Our app provides real-time metrics and predictive analytics to optimize your recruitment strategy."} 
                />
            </div>
            <div className='w-full md:w-1/2'>
                {/* Additional content can be added here */}
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
        <div className='flex flex-col text-start gap-4 pb-4'>
            <div 
                className='font-bold cursor-pointer flex justify-between items-center'
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
                <div className='text-sm text-primary'>
                    {props.ans}
                </div>
            )}
            <div className={`h-[1px] w-full bg-primary ${isOpen ? 'mt-4' : ''}`}></div>
        </div>
    );
}
