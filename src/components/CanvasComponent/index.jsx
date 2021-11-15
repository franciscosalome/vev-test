import React from 'react'

import { Canvas } from './styles'

export default function CanvasComponent({children}){

  return(
    <Canvas>
      {children}
    </Canvas>
  )
}