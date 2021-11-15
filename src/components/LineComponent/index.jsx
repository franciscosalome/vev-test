import React from 'react'
import { Input, Line } from './styles'

export default function LineComponent(props) {

  const { position = {}, setWidth } = props
  const { top, left, width, angle } = position
  return (
    <Line
      style={{
        width,
        top,
        left,
        transform: `rotate(${angle}rad)`
      }}>
      <Input
        type='number'
        value={Number(width).toFixed(0)}
        onChange={(e) => setWidth(Number(e.target.value))}
      />
    </Line>
  )


}