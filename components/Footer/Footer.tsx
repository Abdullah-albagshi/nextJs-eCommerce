import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';

const Footer = () => {
	return (
		<footer className='w-full  bg-ecm-black pb-8 md:p-4 '>
			<section className='ecm-max-width mx-auto flex flex-col md:flex-row items-start justify-between w-full '>
				{/* About Us Blog FAQs Order Tracking Contact © By NordicMade */}
				<ul className='flex flex-wrap w-full flex-col md:flex-row py-4 text-ecm-gray flex-1'>
					<li className='border-b border-ecm-gray md:border-b-0 py-2 md:py-0 text-sm text-ecm-gray-lighter hover:text-ecm-gray-lightest cursor-pointer transition-all md:mx-4'>
						About Us
					</li>
					<li className='border-b border-ecm-gray md:border-b-0 py-2 md:py-0 text-sm text-ecm-gray-lighter hover:text-ecm-gray-lightest cursor-pointer transition-all md:mx-4'>
						Blog
					</li>
					<li className='border-b border-ecm-gray md:border-b-0 py-2 md:py-0 text-sm text-ecm-gray-lighter hover:text-ecm-gray-lightest cursor-pointer transition-all md:mx-4'>
						FAQs
					</li>
					<li className='border-b border-ecm-gray md:border-b-0 py-2 md:py-0 text-sm text-ecm-gray-lighter hover:text-ecm-gray-lightest cursor-pointer transition-all md:mx-4'>
						Contact
					</li>
					<li className=' border-ecm-gray md:border-b-0 py-2 md:py-0 text-sm text-ecm-gray-lighter hover:text-ecm-gray-lightest cursor-pointer transition-all md:mx-4'>
						Developed by Abdullah Albagshi
					</li>
				</ul>
				<SocialMedia className='w-auto' />
			</section>
		</footer>
	);
};

export default Footer;
