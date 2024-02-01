"use client"

import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Link from "next/link"
import { cn } from "@/lib/utils"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const Navbar = () => {
  return (
    // when scrolling down, the navbar padding will be removed
    
    <header className='ecm-max-width mx-auto py-[.625rem] lg:py-[.9375rem] px-4 flex justify-between items-center sticky top-0 bg-white z-[99990]'>
      <nav>
        <ul className='flex'>
          <li className='py-4 px-3'>
            <Link href='/' className='text-ecm-gray-light'>Shop</Link>
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
            <Link href='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg></Link>
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

