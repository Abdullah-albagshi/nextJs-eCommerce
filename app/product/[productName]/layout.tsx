import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "Product page",
  keywords: "Product, e-commerce, shopping, cart, checkout, product page, product details, product information, product details page, product details information"
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex flex-1 w-full pb-10 mx-auto basis-full center'>{children}</main>
  );
}
