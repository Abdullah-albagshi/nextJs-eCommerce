import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		// when scrolling down, the navbar padding will be removed
		<header className='ecm-max-width mx-auto h-20 py-[.625rem] px-4 flex justify-between items-center sticky top-0 bg-white'>
			<nav>
				<ul className='flex'>
					<li className='py-4 px-3'>
						<Link href='/'>Shop</Link>
					</li>
					<li className='py-4 px-3'>
						<Link href='/product/lamp'>Categories</Link>
					</li>
					<li className='py-4 px-3'>
						<Link href='/'>Pages</Link>
					</li>
					<li className='py-4 px-3'>
						<Link href='/'>Elements</Link>
					</li>
				</ul>
			</nav>
			<div
				id='logo'
				className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
			>
				<Link href='/'>
					<img
						src='https://savoy.nordicmade.com/wp-content/themes/savoy/assets/img/logo@2x.png'
						className='h-4'
						alt='logo'
					/>
				</Link>
			</div>
			<nav className=''>
				{/* whitelist, sign in, cart */}
				<ul className='flex'>
					<li className='py-4 px-3'>
						<Link href='/'>Wishlist</Link>
					</li>
					<li className='py-4 px-3'>
						<Link href='/'>Sign in</Link>
					</li>
					<li className='py-4 px-3'>
						<Link href='/'>Cart</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
