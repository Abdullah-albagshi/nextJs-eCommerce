import './globals.css';

import { CartProvider } from '@/components/CartProvider/CartProvider';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import { Roboto } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'SAVOY Shop',
  description: 'eCommerce website',
  keywords: ['eCommerce', 'Shop', 'SAVOY', 'decor', 'furniture', 'home', 'interior', 'design'],
};

const roboto = Roboto({
  weight: ['100', '300', '400', '500','700', '900', ],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`flex flex-col min-h-dvh ${roboto.className}`}>
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
