// import React from 'react'
// import {assets, features} from '../assets/assets'

// const BottomBanner = () => {
//   return (
//     <div className='relative mt-24 px-4 md:px-12'>
//         <img src={assets.bottom_banner_image} alt="Banner" className='w-full hidden md:block' />
//          <img src={assets.bottom_banner_image_sm} alt="Banner" className='w-full  md:hidden' />
      

//        <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
//            <div>
//             <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-6'>
//                 Why we are the best?</h1>
//                 {features.map((feature ,index)=>(
//                    <div key={index} className='flex items-center gap-4 mt-2'>
//                     <img src={feature.icon} alt={feature.title} className='md:w-11 w-9'/> 
//                     <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
//                     <p className = 'text-gray-500/70 text-xs md:text-sm'>{feature.description}</p>

//                     </div>     
//                 ))}
//            </div>
//        </div>
//     </div>
//   )
// }

// export default BottomBanner

//........................................................................
// import React from 'react'
// import { assets, features } from '../assets/assets'

// const BottomBanner = () => {
//   return (
//     <div className='relative mt-24 px-4 md:px-12'>
//       {/* ✅ Background image */}
//       <img
//         src={assets.bottom_banner_image}
//         alt="Banner"
//         className='w-full hidden md:block'
//       />
//       <img
//         src={assets.bottom_banner_image_sm}
//         alt="Banner"
//         className='w-full md:hidden'
//       />

//       {/* ✅ Overlay text content */}
//       <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24 z-10 text-center md:text-right'>
//         <div className='backdrop-blur-sm p-4 rounded-2xl md:w-1/2'>
//           <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-4 md:pr-20 lg:pr-28'>
//             Why we are the best?
//           </h1>

//           {features.map((feature, index) => (
//             <div key={index} className='flex items-start gap-4 mt-3 '>
//               <img
//                 src={feature.icon}
//                 alt={feature.title}
//                 className='md:w-11 w-9 shrink-0'
//               />

//               {/* ✅ Stack title & description vertically */}
//               <div className='flex flex-col text-left '>
//                 <h3 className='text-lg md:text-xl font-semibold '>
//                   {feature.title}
//                 </h3>
//                 <p className='text-gray-600 text-xs md:text-sm mt-1'>
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BottomBanner

//....................................................................

// import React from 'react'
// import { assets, features } from '../assets/assets'

// const BottomBanner = () => {
//   return (
//     <div className='relative mt-24 px-4 md:px-12'>
//       {/* ✅ Background image */}
//       <img
//         src={assets.bottom_banner_image}
//         alt="Banner"
//         className='w-full hidden md:block'
//       />
//       <img
//         src={assets.bottom_banner_image_sm}
//         alt="Banner"
//         className='w-full md:hidden'
//       />

//       {/* ✅ Overlay content */}
//       <div className='absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between px-6 md:px-16 z-10'>

        
//         <div className='relative flex justify-center w-full md:w-1/2'>
         

          
//         </div>

//         {/* ✅ Right side: Text */}
//         <div className='p-4 rounded-2xl md:w-1/2 text-center md:text-left max-w-xs md:max-w-sm lg:max-w-md'>
//           <h1 className='text-2xl md:text-3xl font-semibold text-[#4fbf8b] mb-6'>
//             Why We Are the Best?
//           </h1>

//           {features.map((feature, index) => (
//             <div key={index} className='flex items-start gap-4 mt-3'>
//               <img
//                 src={feature.icon}
//                 alt={feature.title}
//                 className='md:w-11 w-9 shrink-0'
//               />
//               <div className='flex flex-col text-left'>
//                 <h3 className='text-lg md:text-xl font-semibold'>
//                   {feature.title}
//                 </h3>
//                 <p className='text-gray-600 text-xs md:text-sm mt-1'>
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BottomBanner
//........................






import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='relative mt-24 px-4 md:px-12'>
      {/* ✅ Background image */}
      <img
        src={assets.bottom_banner_image}
        alt="Banner"
        className='w-full hidden md:block'
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="Banner"
        className='w-full md:hidden'
      />

      {/* ✅ Overlay content */}
      <div className='absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 z-10'>

        {/* ✅ Left image (only visible on mobile below text) */}
        <div className='order-2 md:order-1 mt-6 md:mt-0 flex justify-center w-full md:w-1/2'>

        </div>

        {/* ✅ Right side: Text */}
        <div className='order-1 md:order-2 p-4 rounded-2xl w-full md:w-1/2 text-center md:text-left max-w-sm md:max-w-md'>
          <h1 className='text-2xl md:text-3xl font-semibold text-[#4fbf8b] mb-6'>
            Why We Are the Best?
          </h1>

          {features.map((feature, index) => (
            <div key={index} className='flex items-start gap-3 md:gap-4 mt-4 justify-center md:justify-start'>
              <img
                src={feature.icon}
                alt={feature.title}
                className='w-8 md:w-11 shrink-0'
              />
              <div className='flex flex-col text-left'>
                <h3 className='text-base md:text-xl font-semibold'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 text-xs md:text-sm mt-1 max-w-[250px] md:max-w-none'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBanner
