'use client';

import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"

import React from 'react'
import { useRouter } from "next/navigation";

const CartModal = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  }
  return (
    <Sheet open={true} onOpenChange={handleClose}>
      <SheetContent className="flex flex-col border-none bg-ecm-light-black py-8 px-10">
          <div className="text-end border-b pb-4">
            <button className="text-ecm-gray-lightest text-base" onClick={handleClose}>
              Close
            </button>
          </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartModal
