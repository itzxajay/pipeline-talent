import React from 'react';
import Image, { StaticImageData } from 'next/image'; // Import StaticImageData type
import jobSeekerLogo from '@/app/Assets/job_seeker.png';
import companyButtonLogo from '@/app/Assets/company_button_logo.png';
import jobSeekerLogo1 from '@/app/Assets/job_seekers_1.png';
import jobSeekerLogo2 from '@/app/Assets/job_seekers_2.png';
import jobSeekerLogo3 from '@/app/Assets/job_seekers_3.png';
import companyLogo1 from '@/app/Assets/company_logo_1.png';
import companyLogo2 from '@/app/Assets/company_logo_2.png';
import companyLogo3 from '@/app/Assets/company_logo_3.png';

export const Section3 = ({ scenario, setScenario }) => {
    // Content for Job Seekers
    const jobSeekersContent = [
        {
            title: "Enhanced Job Matching",
            desc: "Job seekers benefit from Pipeline Talent's advanced AI algorithms that match their skills and experience with relevant job openings.",
            logo: jobSeekerLogo1
        },
        {
            title: "Personalized Experience",
            desc: "Candidates enjoy a personalized recruitment journey where the application process reflects the employer's brand and values.",
            logo: jobSeekerLogo2
        },
        {
            title: "Efficiency and Transparency",
            desc: "With automated screening and scheduling processes, candidates experience a more streamlined recruitment process.",
            logo: jobSeekerLogo3
        }
    ];

    // Content for Companies
    const companyContent = [
        {
            title: "Increased Efficiency",
            desc: "Automation of candidate sourcing and screening processes reduces the time and effort spent on manual tasks.",
            logo: companyLogo1
        },
        {
            title: "Improved Accuracy",
            desc: "AI technologies can analyze candidate data objectively and without bias, ensuring that the screening process is fair and consistent.",
            logo: companyLogo2
        },
        {
            title: "Enhanced Candidate Experiences",
            desc: "Personalization and brand consistency in the recruitment process can significantly improve the candidate experience.",
            logo: companyLogo3
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
                <div className='w-full lg:w-1/3 flex flex-col gap-4 lg:mr-12'>
                    <button
                        className={`h-20 rounded-xl text-center flex items-center gap-4 px-4 ${scenario === 'Job Seekers' ? 'bg-primary text-white' : 'border-primary border-[1px] text-black'}`}
                        onClick={() => setScenario('Job Seekers')}
                    >
                        <Image src={jobSeekerLogo} alt="Job Seekers" width={48} height={48} />
                        <span className="font-semibold text-lg">JOB SEEKERS</span>
                    </button>
                    <button
                        className={`h-20 rounded-xl text-center flex items-center gap-4 px-4 ${scenario === 'Company' ? 'bg-primary text-white' : 'border-primary border-[1px] text-black'}`}
                        onClick={() => setScenario('Company')}
                    >
                        <Image src={companyButtonLogo} alt="Company" width={48} height={48} />
                        <span className="font-semibold text-lg">COMPANY</span>
                    </button>
                </div>
                <div className='w-full lg:w-2/3 flex flex-col lg:flex-row justify-between gap-6 pt-10 lg:pt-0 lg:pl-20'>
                    {content.map((item, index) => (
                        <Col key={index} title={item.title} desc={item.desc} logo={item.logo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

function Col(props: { title: string, desc: string, logo?: StaticImageData }) {
    return (
        <div className='w-full flex flex-col items-center lg:items-start bg-white p-4 rounded-lg shadow-md'>
            <div className='w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full mb-4 flex items-center justify-center'>
                {props.logo && <Image src={props.logo} alt={props.title} width={56} height={56} />}  {/* Adjust size here */}
            </div>
            <div className='font-bold text-center lg:text-left w-full text-lg'>
                {props.title}
            </div>
            <div className='text-sm text-center lg:text-left mt-2'>
                {props.desc}
            </div>
        </div>
    );
}
