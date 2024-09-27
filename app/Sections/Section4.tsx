import React from 'react';

export const Section4 = () => {
    return (
        <div className='px-4 md:px-10 pt-10 pb-20 sm:pb-32 text-white bg-primary mx-4 md:mx-10 text-center rounded-t-3xl h-auto'>
            <Section4And5Header title={"Glimpse of our Job Seeker App"} slogan={"Discover Your Dream Job with Pipeline Talent"} />
            <Section />
        </div>
    );
}

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
            
            </div>
            <div className='w-full md:w-1/2'>
                <FAQ ques={"AI-Powered Matching"} ans={"Our advanced AI algorithms analyze job listings and your profile to suggest the most relevant positions, saving you time and effort in your job search."} />
                <FAQ ques={"Career Insights and Guidance"} ans={"Get tailored advice and industry insights to make informed career decisions."} />
            </div>
        </div>
    );
}

export function FAQ(props: { ques: string, ans: string }) {
    return (
        <div className='flex flex-col text-start gap-4 pb-6'>
            <div className='text-lg font-bold'>
                {props.ques}
            </div>
            <div className='text-sm'>
                {props.ans}
            </div>
            <div className='h-[1px] w-full bg-white'></div>
        </div>
    );
}
