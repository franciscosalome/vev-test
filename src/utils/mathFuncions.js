export const calculateCatetuses = (x1, x2, y1, y2) => {
  const cathetus1 = x2 - x1
  const cathetus2 = y2 - y1
  return {cathetus1, cathetus2}
}

export const calculateAngle = (cathetus1, cathetus2) => Math.atan2(cathetus2, cathetus1) 