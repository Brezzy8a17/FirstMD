import React from 'react'

//the links in the footer need to be updated to the correct paths @date: 7/10/2024

const Footer = () => {
  return (
    <section id= "footer" className=" w-full overflow-hidden h-full common-padding bg-gradient-to-t from-pink-100 to-blue-25 ">
      <div class="footer-links" className='w-full width-max justify-center flex'>
        <div class = "footer-link-wrapper" className='flex'>
          <div class="footer__links--items" className='flex flex-col justify-between my-4 text-left w-40'>
              <h2 className='my-4 text-white font-bold cursor pointer' href ="/">About Us</h2>
              <a href ="" className='text-white text-normal'> How It Works </a> 
              <a href ="" className='text-white text-normal' >Careers</a>
              <a href ="" className='text-white text-normal' >Terms of Service</a>
          </div>

          <div class="footer__links--items" className='flex flex-col justify-between my-4 text-left w-40 box-border'>
          <h2 className='my-4 text-white font-bold' href ="/">Contact Us</h2>
              <a href ="" className='text-white text-normal' >Contact</a> <a className='text-white text-normal' href="/">Support</a>
              <a href ="" className='text-white text-normal' >Destinations</a>
          </div>
        </div>

        <div class = "footer-link-wrapper" className='flex'>
          <div class="footer__links--items" className='flex flex-col justify-between my-4 text-left w-40 box-border'>
              <h2 className='my-4 text-white font-bold' href ="/">Videos</h2>
              <a href ="" className='text-white text-normal' >Submit Video</a> <a href="/" className='text-white text-normal'>Ambassadors</a>
              <a href ="" className='text-white text-normal'>Agency</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer