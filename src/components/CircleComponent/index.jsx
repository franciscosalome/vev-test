import React, { useState } from "react";
import { Circle, Input, InputContainer } from "./styles";

export default function CircleComponent(props) {

  const {
    setCirclePosition,
    circleInfo = {},
  } = props

  const [dragging, setDragging] = useState(false)
  const [refPosition, setRefPosition] = useState({ x: 0, y: 0 })

 function handlerSetPosition(newCircleposition) {
    setCirclePosition(newCircleposition)
  }

  function onMouseDown(e) {
    const { pageX, pageY } = e
    setRefPosition({
      x: pageX - circleInfo.x,
      y: pageY - circleInfo.y
    })
    setDragging(true)
  }

  function handlerDrag(e) {
    if (dragging) {
      const { pageX, pageY } = e
      const newCircleposition = {
        x: pageX - refPosition.x,
        y: pageY - refPosition.y
      }
      setCirclePosition(newCircleposition)
      e.preventDefault()
    }
  }

  return (
    <Circle
      style={{
        left: circleInfo.x,
        top: circleInfo.y
      }}
      onMouseDownCapture={onMouseDown}
      onMouseMove={handlerDrag}
      onMouseUpCapture={() => setDragging(false)}
    >
      <InputContainer>
        <span>X</span>
        <Input
          onChange={(e) => handlerSetPosition({
            x: Number(e.target.value),
            y: circleInfo.y
          })}
          type='number'
          value={Number(circleInfo.x).toFixed(0)}
        />
      </InputContainer>
      <InputContainer>
        <span>Y</span>
        <Input
          onChange={(e) => handlerSetPosition({
            y: Number(e.target.value),
            x: circleInfo.x
          })}
          type='number'
          value={Number(circleInfo.y).toFixed()}
        />
      </InputContainer>

    </Circle>
  )
}