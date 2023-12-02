import React from 'react'



export const ImageCard = ({image1, heading1, texts1,image2, heading2, texts2,image3, heading3, texts3,image4, heading4, texts4,
  image5, heading5, texts5,image6, heading6, texts6
}) => {
  const data=[
    {
        Image:image1,
        heading:heading1,
        text:texts1,
    },
    {
      Image:image2,
      heading:heading2,
      text:texts2,
  },
  {
    Image:image3,
    heading:heading3,
    text:texts3,
},
{
  Image:image4,
  heading:heading4,
  text:texts4,
},
{
  Image:image5,
  heading:heading5,
  text:texts5,
},
{
  Image:image6,
  heading:heading6,
  text:texts6,
},
 
  ]
  return (
    <>
    <div className='flex flex-wrap mx-10'>
    {
        data.map((val,ind)=>{
          return(
            <>
            <div key={ind} className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
  <div className="bg-gray-300 h-72 w-full rounded-lg shadow-md bg-cover bg-center">
    <img className="bg-gray-300 h-72 w-full rounded-lg shadow-md bg-cover bg-center"
     src={val.Image} alt="" />
  </div>
  <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{val.heading}</div>
    <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
      <h1 className="text-gray-800 font-bold ">{val.text}</h1>
      
    </div>
  </div>
</div>
            </>
          )
        })
    }

    </div>

</>

)
}
