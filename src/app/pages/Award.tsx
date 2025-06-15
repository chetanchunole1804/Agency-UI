import React from 'react'
import AwardList from '../components/AwardList'

const Award = () => {
  return (
    <>
    <div style={{
          backgroundColor: "var(--bgColor2) ",
          // fontFamily: "inter,sans-serif",
        }}>
        <div className='w-[90%] mx-auto'>
            <h3 className='text-center text-[40px] font-bold py-5 text-[var(--textclr1)]'>Our Awards</h3>
            <AwardList/>
            <div
            className="w-[100%] mx-auto  h-[1px]"
            style={{ backgroundColor: "#F3D1BF" }}
          ></div>
        </div>
        <p className='text-[#3914008e] text-center py-12'>Want more awards? <span className='text-[var(--textclr1)]'>Explore Now</span></p>
    </div>
    </>
  )
}

export default Award