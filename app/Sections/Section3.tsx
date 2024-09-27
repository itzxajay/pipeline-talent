import React from 'react'

export const Section3 = () => {
    return (
        <div className='px-4 md:px-10 pt-10 mb-10'>
            <div className='text-2xl md:text-3xl font-bold text-center md:text-left'>
                Benefits for both of you!
            </div>
            <div className='pt-4 flex flex-col lg:flex-row'>
                {/* left */}
                <div className='w-full lg:w-1/3 flex flex-col gap-4'>
                    <div className='h-16 rounded-xl bg-primary text-center flex flex-col justify-center items-center text-white'>
                        <div>
                            Job Seekers
                        </div>
                    </div>
                    <div className='h-16 rounded-xl border-primary border-[1px] text-center flex flex-col justify-center items-center text-black'>
                        <div>
                            Companies
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='w-full lg:w-2/3 flex flex-col lg:flex-row justify-between gap-10 pt-12 lg:pt-0 lg:pl-20'>
                    <Col
                        title={"Enhanced Job Matching"}
                        desc={"Job seekers benefit from Pipeline Talent's advanced AI algorithms that match their skills and experience with relevant job openings."}
                    />
                    <Col
                        title={"Personalized Experience"}
                        desc={"Candidates enjoy a personalized recruitment journey where the application process reflects the employer's brand and values."}
                    />
                    <Col
                        title={"Efficiency and Transparency"}
                        desc={"With automated screening and scheduling processes, candidates experience a more streamlined recruitment process."}
                    />
                </div>
            </div>
        </div>
    )
}

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
    )
}
