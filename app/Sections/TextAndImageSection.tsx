import React from 'react'


function TextAndImageSection(props: { title: string, desc: string}) {
    return (
        <div className='pr-20 w-full '>
            <div className='text-2xl font-bold text-wrap '>{props.title}</div>
            <div className='text-lg  text-wrap pt-6'>
                {props.desc}
            </div>
        </div>
    )
}

export default TextAndImageSection