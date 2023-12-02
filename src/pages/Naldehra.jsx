import React from 'react'
import { ImageCard }from "../components/ImageCard";
import img1 from "../assets/Imag.png"


const Naldehra = () => {
  return (
    
    
    <div className='mt-40 mb-32'>
    <h1 className='text-center text-4xl m-2'>Heading1</h1>
    <h1 className='text-center text-3xl m-2'>Heading2</h1>
    <p className='text-center text-xl m-2'>Sub Heading</p>
  <ImageCard
   image1={img1} heading1="Lorem " texts1=" amet consectetur adipisicing elit. Non, officiis." 
   image2={img1} heading2="Lorem " texts2=" amet consectetur adipisicing elit. Non," 
   image3={img1} heading3="Lorem " texts3=" amet consectetur adipisicing elit. " 
   image4={img1} heading4="Lorem " texts4=" amet consectetur adipisicing " 
   image5={img1} heading5="Lorem " texts5=" amet consectetur " 
   image6={img1} heading6="Lorem " texts6=" amet ." 
   />

  <h1 className='text-center text-4xl m-2'>Heading1</h1>
  <p className='text-center text-xl m-2'>Sub Heading</p>
  

  </div>

  )
}

export default Naldehra