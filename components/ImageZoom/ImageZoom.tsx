'use client';

import 'react-medium-image-zoom/dist/styles.css'

import React from 'react'
import Zoom from 'react-medium-image-zoom';

type ImageZoomProps = {
  children: React.ReactNode;
};

export const ImageZoom = ({ children }: ImageZoomProps) => {
  return (
    <Zoom>
      {children}
    </Zoom>

  )
}
