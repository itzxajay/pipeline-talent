import React from 'react';

export const Section3 = ({ scenario, setScenario }) => {
    // Content for Job Seekers
    const jobSeekersContent = [
        {
            title: "Enhanced Job Matching",
            desc: "Job seekers benefit from Pipeline Talent's advanced AI algorithms that match their skills and experience with relevant job openings."
        },
        {
            title: "Personalized Experience",
            desc: "Candidates enjoy a personalized recruitment journey where the application process reflects the employer's brand and values."
        },
        {
            title: "Efficiency and Transparency",
            desc: "With automated screening and scheduling processes, candidates experience a more streamlined recruitment process."
        }
    ];

    // Content for Companies
    const companyContent = [
        {
            title: "Increased Efficiency",
            desc: "Automation of candidate sourcing and screening processes reduces the time and effort spent on manual tasks."
        },
        {
            title: "Improved Accuracy",
            desc: "AI technologies can analyze candidate data objectively and without bias, ensuring that the screening process is fair and consistent."
        },
        {
            title: "Enhanced Candidate Experiences",
            desc: "Personalization and brand consistency in the recruitment process can significantly improve the candidate experience."
        }
    ];

    // Determine which content to display
    const content = scenario === 'Job Seekers' ? jobSeekersContent : companyContent;

    return (
        <div className='px-4 md:px-10 pt-10 mb-10'>
            <div className='text-2xl md:text-3xl font-bold text-center md:text-left'>
                Benefits for both of you!
            </div>
            <div className='pt-4 flex flex-col lg:flex-row'>
                <div className='w-full lg:w-1/3 flex flex-col gap-4'>
                    <button
                        className={`h-16 rounded-xl text-center flex flex-col justify-center items-center ${scenario === 'Job Seekers' ? 'bg-primary text-white' : 'border-primary border-[1px] text-black'}`}
                        onClick={() => setScenario('Job Seekers')}
                    >
                        JOB SEEKERS
                    </button>
                    <button
                        className={`h-16 rounded-xl text-center flex flex-col justify-center items-center ${scenario === 'Company' ? 'bg-primary text-white' : 'border-primary border-[1px] text-black'}`}
                        onClick={() => setScenario('Company')}
                    >
                        COMPANY
                    </button>
                </div>
                <div className='w-full lg:w-2/3 flex flex-col lg:flex-row justify-between gap-10 pt-12 lg:pt-0 lg:pl-20'>
                    {content.map((item, index) => (
                        <Col key={index} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </div>
        </div>
    );
};

function Col(props: { title: string, desc: string }) {
    return (
        <div className='w-full flex flex-col items-center lg:items-start'>
            <div className='w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full mb-4'></div>
            <div className='font-bold text-center lg:text-left w-full'>
                {props.title}
            </div>
            <div className='text-sm text-center lg:text-left'>
                {props.desc}
            </div>
        </div>
    );
}
