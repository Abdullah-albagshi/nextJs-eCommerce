import './globals.css';

import { CartProvider } from '@/components/CartProvider/CartProvider';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'SAVOY Shop',
  description: 'eCommerce website',
  keywords: ['eCommerce', 'Shop', 'SAVOY' ,'decor', 'furniture', 'home', 'interior', 'design'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className='flex min-h-dvh flex-col font-roboto'>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
