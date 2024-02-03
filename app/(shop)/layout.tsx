import Carousel from "@/components/CategoryCarousel/Carousel";
import Categories from "@/components/Filters/Categories";
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
    <main className='flex-1 basis-full w-full center mx-auto pb-10'>
      <Carousel />
      <section className="flex-1 basis-full ecm-max-width center mx-auto">
        <div className="py-14">
          <Categories />
        </div>
        {children}
      </section>
    </main>
  );
}
