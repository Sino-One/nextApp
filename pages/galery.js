import React from 'react'
import Image from 'next/image'
import img1 from '../public/assets/img1.jpg'
import img2 from '../public/assets/img2.jpg'
import img3 from '../public/assets/img3.jpg'


export default function galery() {
  return (
    <>
    <Image
    layout='responsive' placeholder='blur'
    src={img1}
    width="16"
    height="9"
    alt='img1'
    />
    <Image
    layout='responsive' placeholder='blur'
    src={img2}
    width="3857"
    height="2571"
    alt='img2'
    />
    <Image
    layout='responsive' placeholder='blur'
    src={img3}
    width="4725"
    height="3150"
    alt='img3'
    />
      {/* <img src="/assets/img1.jpg" alt="" />
      <img src="/assets/img2.jpg" alt="" />
      <img src="/assets/img3.jpg" alt="" /> */}
    </>
  )
}

/**
 * 4.9 Mb -> 1 Mb
 * 1.1 Mb -> 330 Kb
 * 912 Kb -> 188 kB
 */
