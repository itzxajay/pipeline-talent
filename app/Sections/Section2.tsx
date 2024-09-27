import React from 'react';
import TextAndImageSection from './TextAndImageSection';

export const Section2 = () => {
    return (
        <div className='py-10 px-4 md:px-10'>
            {/* This text will be hidden on small and medium screens, but visible on large screens and above */}
            <div className='hidden lg:block w-full text-center text-lg md:text-xl lg:text-2xl'>
                Pipeline Talent is an award-winning platform trusted by leading companies
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center pt-10 lg:pt-20'>
                {/* left */}
                <div className='w-full lg:w-1/2 lg:pl-20'>
                    {/* You can add content here if needed */}
                </div>
                {/* right */}
                <div className='w-full lg:w-1/2 lg:pr-20'>
                    <TextAndImageSection 
                        title={"Streamline Your Hiring Process"}
                        desc={"Discover a smarter way to recruit top talent with Pipeline Talent, our AI-driven recruitment model designed to transform how companies build their teams. By leveraging advanced technology, we automate candidate sourcing and screening, saving you time and ensuring you connect with the best candidates faster than ever before."} 
                    />
                    {/* <div className='pr-20 w-full'>
                    <div className='text-2xl font-bold text-wrap '>Streamline Your Hiring Process</div>
                    <div className='text-lg  text-wrap pt-6'>
                    Discover a smarter way to recruit top talent with Pipeline Talent, our AI-driven recruitment model designed to transform how companies build their teams. By leveraging advanced technology, we automate candidate sourcing and screening, saving you time and ensuring you connect with the best candidates faster than ever before.
                    </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
    );
};
