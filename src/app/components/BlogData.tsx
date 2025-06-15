import React from 'react'
import Image from 'next/image'

import blog1 from '../../../public/blog1.svg'
import blog2 from '../../../public/blog2.svg'
import blog3 from '../../../public/blog3.svg'


const items = [
    {
        image:blog1,
        title:"Stories",
        heading:"Agency is a business you hire to outsource",
        date:"5 Nov, 2021"
    },
    {
        image:blog2,
        title:"Design",
        heading:"Outsource your digital marketing efforts",
        date:"29 Oct, 2021"
    },
    {
        image:blog3,
        title:"Marketing",
        heading:"Your business with a variety of digital",
        date:"21 Oct, 2021"
    }
]

const BlogData = () => {
  return (
    <div className='flex mx-auto sm:gap-0 gap-14' id='blogData'>
        {items.map((item, index)=>(
        <div className='flex flex-col gap-5 justify-between sm:w-[30%] w-[100%] mx-auto' key={index}>
            <Image src={item.image} alt={item.title} width={420} height={40}/>
            <p className='text-[var(--textclr1)]'>{item.title}</p>
            <h4 className='text-2xl text-[var(--textclr1)] font-bold'>{item.heading}</h4>
            <p className='text-[#3914008e]'>{item.date}</p>
        </div>
        ))}
    </div>
  )
}

export default BlogData