import React from 'react'
import TextAndImageSection from './TextAndImageSection'

export const Section7 = () => {
    return (
        <div className='py-10 px-4 md:px-10'>
            <div className='flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[60vh]'>
                {/* left */}
                <div className='w-full lg:w-1/2'>
                
                </div>
                {/* right */}
                <div className='w-full lg:w-1/2'>
                    <TextAndImageSection
                        title={"Automated Candidate Sourcing and Screening"}
                        desc={"Say goodbye to manual candidate searches. Pipeline Talent uses advanced AI algorithms to sift through vast pools of talent, identifying candidates whose skills and experience align perfectly with your requirements. Focus your time on engaging with the most promising candidates, not on endless resume reviews."}
                    />
                </div>
            </div>
        </div>
    )
}
