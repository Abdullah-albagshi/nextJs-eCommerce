'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog"

import { AddProductToCart } from "../ProductSummary/AddProductToCart"
import { Product } from "@/types/Product"
import ProductCarousel from "../ProductCarousel/ProductCarousel"
import ProductSummary from "../ProductSummary/ProductSummary"
import { ProductSummaryDescription } from "../ProductSummary/ProductSummaryDescription"
import { ProductSummaryName } from "../ProductSummary/ProductSummaryName"
import { ProductSummaryPrice } from "../ProductSummary/ProductSummaryPrice"
import { ProductSummaryRating } from "../ProductSummary/ProductSummaryRating"
import React from "react"
import SocialMedia from "../SocialMedia/SocialMedia"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

type Props = {
  product: Product
}

export function ProductModal({ product }: Props) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  }

  // close dialog when the user clicks escape
  React.useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogOverlay className="fixed indent-0 bg-black/5" onClick={handleClose} />
      <DialogContent className="w-full sm:max-w-[70rem] p-0 border-none max-h-screen overflow-y-scroll lg:overflow-y-auto">
        <DialogClose onClick={handleClose} className="absolute z-[9999999999999] cursor-pointer top-4 right-6">
          <span className="sr-only">Close</span>
          <X className="w-6 h-6"  />
        </DialogClose>
        <section className="flex flex-col-reverse items-center justify-center bg-white lg:flex-row">
          <div className="lg:w-[40%] p-8 flex flex-col justify-between h-full">
            <ProductSummary product={product}>
              <section >
                <ProductSummaryName />
                <ProductSummaryPrice />
              </section>
              <section className="flex flex-col gap-4">
                <ProductSummaryDescription />
                <ProductSummaryRating />
                <AddProductToCart />
                <SocialMedia />
              </section>
            </ProductSummary>
          </div>
          <div className="lg:w-[60%]">
            <ProductCarousel product={product} />
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}
