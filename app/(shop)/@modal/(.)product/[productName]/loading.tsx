'use client'

import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'

import { Dot } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'

const loading = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  }
  
  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogOverlay className="fixed indent-0 bg-black/5" />
      <DialogContent className="border-none shadow-none justify-center">
        {/* animate rotate */}
        <div className=" animate-ping h-8 w-8   text-ecm-yellow " >
          <Dot size={48} />
        </div>
      </DialogContent>
    </Dialog>
  )
}


export default loading