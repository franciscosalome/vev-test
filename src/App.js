import React, { useEffect } from 'react'
import styled from 'styled-components';
import Canvas from './components/CanvasComponent';
import CircleComponent from './components/CircleComponent';
import LineComponent from './components/LineComponent';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state'
import { calculateAngle, calculateCatetuses } from './utils/mathFuncions';

const Container = styled.div`
  width: 1fr;
  height: 1fr;
  display: flex;
  justify-content: center;
`

function App() {
  const circlesPosition = useSelector((state) => state.circlesPosition)
  const linePosition = useSelector((state) => state.linePosition)
  const {circleOne, circleTwo} = circlesPosition

  const dispatch = useDispatch()

  const { 
    changeCircleOnePosition, 
    changeCircleTwoPosition, 
    changeLinePosition 
  } = bindActionCreators(actionCreators, dispatch)

  function handlerChangeLineWidth(newLineWidth){
    const {angle} = linePosition
    const {x, y} = circleOne
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    const newLinePosition = {
      x: (newLineWidth * cos) + x,
      y: (newLineWidth * sin) + y
    }
    changeLinePosition({...linePosition, width: newLineWidth})
    changeCircleTwoPosition(newLinePosition)
  }

  async function calculateLinePosition(){
    const {cathetus1, cathetus2} = await calculateCatetuses(circleOne.x, circleTwo.x, circleOne.y, circleTwo.y)
    const angle = calculateAngle(cathetus1, cathetus2) 
    changeLinePosition({
      top: circleOne.y,
      left: circleOne.x,
      width: Math.hypot(cathetus1, cathetus2),
      angle
    })
  }

  useEffect(() =>  calculateLinePosition(), [circlesPosition])

  return (
    <Container>
      <Canvas>
        <CircleComponent
          circleInfo={circleOne}
          setCirclePosition={changeCircleOnePosition}
          calculateLinePosition={calculateLinePosition}
        />
        <CircleComponent
          circleInfo={circleTwo}
          setCirclePosition={changeCircleTwoPosition}
          calculateLinePosition={calculateLinePosition}
        />
        <LineComponent
          position={linePosition}
          setWidth={handlerChangeLineWidth}
        />
      </Canvas>
    </Container>
  );
}

export default App;
