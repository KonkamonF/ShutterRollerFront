import React from 'react'
import PageNotFoundPicture from "../assets/PageNotFoundPicture.png"

export default function PageNotFound() {
  return (
    <div className='bg-[#072212] flex justify-center py-20'>
        <img src={PageNotFoundPicture} alt="" />
    </div>
  )
}
