import React from 'react'
import Image from 'next/image'
import logo from "@/app/Assets/logo2.png"

export const Footer = () => {
    return (
        <div className='w-full h-[100px] md:h-[120px] lg:h-[150px] flex justify-center items-center px-4 md:px-10'>
            <Image src={logo} alt='Logo' className='h-auto max-w-[60%] md:max-w-[40%] lg:max-w-[30%]'/>
        </div>
    )
}
