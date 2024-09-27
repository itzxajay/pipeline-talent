import React from 'react';
import { Section4And5Header } from './Section4';

export const Section5 = () => {
    return (
        <div className='px-4 md:px-10 pt-10 mb-10 text-primary bg-secondary mx-4 md:mx-10 text-center rounded-b-3xl h-auto pb-10'>
            <Section4And5Header title={"Glimpse of our Recruiter App"} slogan={"Streamline Your Hiring Process with Pipeline Talent"} />
            <Section />
        </div>
    );
}

export function Section() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center pt-10 md:pt-20'>
            <div className='w-full md:w-1/2'>
                <FAQ ques={"AI-Powered Matching"} ans={"Our advanced AI algorithms analyze job listings and your profile to suggest the most relevant positions, saving you time and effort in your job search."} />
                <FAQ ques={"AI-Powered Matching"} ans={""} />
                <FAQ ques={"Career Insights and Guidance"} ans={""} />
            </div>
            <div className='w-full md:w-1/2'>
            
            </div>
        </div>
    );
}

export function FAQ(props: { ques: string, ans: string }) {
    return (
        <div className='flex flex-col text-start gap-4 pb-4'>
            <div>
                {props.ques}
            </div>
            <div>{props.ans}</div>
            <div className='h-[1px] w-full bg-primary'></div>
        </div>
    );
}
