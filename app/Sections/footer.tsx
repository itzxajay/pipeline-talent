import React from 'react';
import Image from 'next/image';
import logo from "@/app/Assets/logo2.png";

export const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            {/* logo */}
            <div className='w-full h-[100px] md:h-[120px] lg:h-[150px] flex justify-center items-center px-4 md:px-10'>
                <Image src={logo} alt='Logo' className='h-auto max-w-[60%] md:max-w-[40%] lg:max-w-[30%]' />
            </div>

            {/* Copyright section */}
            <div className='w-full text-center text-sm text-gray-500 py-4 md:py-6 lg:py-4'>
                <hr className='w-4/5 mx-auto my-4' />
                <span>Copyright 2024</span>
            </div>
        </div>
    )
}
