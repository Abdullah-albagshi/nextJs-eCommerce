'use client';

import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import CategoryNav from './CategoryNav';
import HamburgerMenu from './HamburgerMenu';
import Link from 'next/link';
import ShopNav from './ShopNav';
import { useCart } from '../CartProvider/CartProvider';

const Navbar = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { totalItems } = useCart();
  return (
    <>
      {/* // when scrolling down, the navbar padding will be removed */}
      <header className='w-full py-[.9375rem] h-20 sticky top-0 bg-white z-[30] border-b-[1px]'>
        <div className='flex items-center justify-between mx-auto ecm-max-width '>
          <nav className='hidden md:block'>
            <ul className='flex items-center justify-center'>
              <li>
                <NavigationMenu onMouseEnter={() => setIsVisible(false)}>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger onMouseEnter={() => setIsVisible(false)}>
                      <Link href='/' className='text-base font-normal text-ecm-gray-light'>
                        Shop
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ShopNav />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>
              </li>
              <li onMouseEnter={() => setIsVisible(true)}>
                <Link href='/' className='relative px-3 py-4 text-ecm-gray-light'>
                  Categories
                  <span className='ecm-gray-light text-[.625rem] ml-1 relative top-[-0.625rem]'>NEW</span>
                </Link>
              </li>
            </ul>
          </nav>
          <HamburgerMenu />
          <div id='logo' className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
            <Link href='/'>
              <img
                src='https://savoy.nordicmade.com/wp-content/themes/savoy/assets/img/logo@2x.png'
                className='h-4'
                alt='logo'
              />
            </Link>
          </div>
          <nav className=''>
            <ul className='flex'>
            <li className='hidden md:list-item'>
                <Link href='/'>
                  <span>Sign in</span>
                </Link>
              </li>
              <li className='px-3 p y-4'>
                <Link href='/cart'>
                  <span className='hidden md:inline-block'>Cart</span>
                  <span className='hidden md:inline-block text-ecm-yellow text-xs ml-1 relative top-[-0.625rem]'>{totalItems}</span>
                  <span className='md:hidden text-ecm-black hover:text-ecm-gray-light'>{`(${totalItems})`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <CategoryNav
          onMouseLeave={() => setIsVisible(false)}
          className={`${isVisible ? 'visible animate-fade-in duration-500' : 'invisible '
            }`}
        />
      </header>
    </>
  );
};

export default Navbar;
