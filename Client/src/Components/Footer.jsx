import React from 'react'
import { assets } from '../assets/CarRental-assets/assets/assets'


/* pre built component */
const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text:sm text-gray-500'>
            <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                <div >
                    <img src={assets.logo} alt="logo" className=' h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Premium car rental serive with wide selection of luxury and everyday vehicles for  all  your driving need.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        {/* Facebook */}
                        <a href='#'><img src={assets.facebook_logo} className='w-5 h-5' /></a>
                        {/* Instagram  */}
                        <a href='#'><img src={assets.instagram_logo} className='w-5 h-5' /></a>
                        {/* Twitter */}
                        <a href='#'><img src={assets.twitter_logo} className='w-5 h-5' /></a>
                        {/* Gmail */}
                        <a href='#'><img src={assets.gmail_logo} className='w-5 h-5' /></a>
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List your car</a></li>
                        <li><a href="#">About us</a></li>

                    </ul>
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>

                    </ul>
                </div>
                 <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li>1234 Luxury Drive</li>
                        <li>San Francisico CA  94107</li>
                        <li>+1 234 567890</li>
                        <li>info@example.com</li>
                        
                    </ul>
                </div>


            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a><span> | </span></li>
                    <li><a href="#">Terms</a><span> | </span></li>
                    <li><a href="#">Cookies</a><span> | </span></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer