import { cn } from '@/lib/utils';
import { Facebook, Twitter, Instagram, X } from 'lucide-react';
import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { shopMenuItems } from './ShopMenuItems';
import CategoryNav from './CategoryNav';
import Link from 'next/link';

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const menuItems = shopMenuItems;

	return (
		<nav className='md:hidden'>
			<button className='relative w-8 h-8 p-2 text-3xl cursor-pointer md:hidden' onClick={() => setIsOpen(!isOpen)}>
				{/* {isOpen ? <X /> : <Menu />} */}
					<div
						className={cn(
							'absolute top-4 -mt-0.5 h-[2px] w-4 rounded bg-black transition-all duration-500',
							"before:absolute before:h-[2px] before:w-4 before:-translate-x-2 before:-translate-y-2 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] ",
							"after:absolute after:h-[2px] after:w-4 after:-translate-x-2 after:translate-y-2 after:rounded after:bg-black after:transition-all after:duration-500 after:content-['']",
              isOpen ? 'before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45 bg-transparent' : ''
						)}
					></div>
				</button>
			{/* black background when  */}
			<div
				id='backdrop'
				className={cn(
					'fixed inset-0 bg-[#3333335e] top-20 ',
					isOpen ? 'visible animate-fade-in duration-300' : 'invisible'
				)}
				onClick={() => setIsOpen(!isOpen)}
			></div>
			<div
				id='menu'
				className={cn(
					'fixed left-0 w-full bg-white z-[50] pb-8',
					isOpen
						? 'top-20 animate-fade-in  duration-500'
						: 'left-[-100%] invisible'
				)}
			>
				<div className='flex flex-col items-start justify-center h-full p-4'>
					<Accordion type='single' collapsible className='w-full'>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='hover:no-underline '>
								<span className='font-normal text-ecm-gray-light text-[.875rem]'>
									Shop
								</span>
							</AccordionTrigger>
							<AccordionContent>
								{/* nested accordion */}
								<Accordion type='single' collapsible className='w-full px-4'>
									{menuItems.map((item) => (
										<AccordionItem
											key={item.title}
											value={item.title}
											className='border-none'
										>
											<AccordionTrigger className='hover:no-underline py-[.25rem]'>
												<span className='text-base font-normal text-ecm-gray-light'>
													{item.title}
												</span>
											</AccordionTrigger>
											<AccordionContent>
												<ul className='flex flex-col items-start justify-center px-4 mt-2 space-y-4'>
													{item.children.map((subItem) => (
														<li
															key={subItem.title}
															className='transition-all duration-300'
														>
															<Link
																href={subItem.href}
																className='text-[14px] font-normal text-ecm-black hover:text-ecm-gray-light'
															>
																{subItem.title}
																{subItem.isNew && (
																	<span className='text-white p-[1px] rounded bg-ecm-black text-[.625rem] ml-1 relative top-[-0.625rem]'>
																		NEW
																	</span>
																)}
															</Link>
														</li>
													))}
												</ul>
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger className='hover:no-underline'>
								<span className='text-base font-normal text-ecm-gray-light text-[.875rem]'>
									Categories
									<span className='ecm-gray-light text-[.625rem] ml-1 relative top-[-0.625rem]'>
										NEW
									</span>
								</span>
							</AccordionTrigger>
							<AccordionContent>
								<CategoryNav />
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					{/* // sign in */}
					<ul className='flex flex-col items-start justify-center w-full mt-4'>
						<li className='w-full pb-4 border-b text-ecm-black hover:text-ecm-gray-light text-[.875rem]'>
							<Link href='/'>
								<span>Sign in</span>
							</Link>
						</li>
					</ul>
					<ul className='flex items-center justify-start w-full mt-4'>
						<li className='mr-4 '>
							<Link href='/'>
								<Facebook />
							</Link>
						</li>
						<li className='mr-4 '>
							<Link href='/'>
								<Twitter />
							</Link>
						</li>
						<li className='mr-4 '>
							<Link href='/'>
								<Instagram />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default HamburgerMenu;
