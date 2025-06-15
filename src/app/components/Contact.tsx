import React from 'react'

import contact1 from '../../../public/contact1.svg'
import contact2 from '../../../public/contact2.svg'
import contact3 from '../../../public/contact3.svg'

import Image from 'next/image'


const items =[
    {
        image: contact1,
        title:"Phone",
        data:"+1 (234) 567-89-00"
    },
    {
        image: contact2,
        title:"EMail",
        data:"info@agency.com"
    },
    {
        image: contact3,
        title:"Address",
        data:"2247 Lunetta Street, TX 76301"
    },
]

const Contact = () => {
  return (
    <div className='flex justify-center AwardItem'>
        {items.map((item, index)=>(
            <div key={index} className='flex flex-col gap-4 border border-[var(--border1)] p-6 w-full h-44 rounded'>
                <div className='flex items-center gap-3'>
                    <Image
                    src={item.image}
                    alt='Image'
                    />
                    <p className=' uppercase text-[var(--buttonClr)] tracking-wider'>{item.title}</p>
                </div>
                <p className='text-[var(--textclr1)]'>{item.data}</p>
            </div>
        ))
    }
    </div>
  )
}

export default Contact