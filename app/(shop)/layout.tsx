import Carousel from "@/components/CategoryCarousel/Carousel";
import Filters from "@/components/Filters/Filters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex-1 w-full pb-10 mx-auto basis-full center'>
      <Carousel />
      <section className="flex-1 mx-auto basis-full ecm-max-width center">
        <Filters/>
        {children}
      </section>
    </main>
  );
}
