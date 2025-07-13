'use client'

const DotPattern = ({ 
  dotColor = 'red',
  size = 20,
  opacity = 0.8,
  reduction = 0.03,
  baseSize = 10,  // dot size
  position = { x: 'left', y: 'top' },
  margin = 0
}) => {
  const spacing = baseSize * 2

  // Get rotation angle based on position
  const getRotation = () => {
    const { x, y } = position
    if (y === 'top' && x === 'left') return 0
    if (y === 'top' && x === 'right') return 90
    if (y === 'bottom' && x === 'right') return 180
    if (y === 'bottom' && x === 'left') return 270
    return 0
  }

  const generateDots = () => {
    const dots = []
    let maxWidth = 0
    let maxHeight = 0

    // Generate rows
    for (let i = 0; i < size; i++) {
      const dotsInRow = size - i

      for (let j = 0; j < dotsInRow; j++) {
        const verticalReduction = reduction + (i * reduction / 3)
        const horizontalReduction = reduction + (j * reduction / 3)
        const reduct = i === j
          ? Math.max(verticalReduction, horizontalReduction)
          : Math.min(verticalReduction, horizontalReduction)

        const currentSize = baseSize * Math.pow(1 - reduct, Math.max(i, j))

        if (currentSize > 1) {
          maxWidth = Math.max(maxWidth, (j + 1) * spacing)
          maxHeight = Math.max(maxHeight, (i + 1) * spacing)

          dots.push(
            <div
              key={`${i}-${j}`}
              style={{
                position: 'absolute',
                top: `${i * spacing}px`,
                left: `${j * spacing}px`,
                width: `${currentSize}px`,
                height: `${currentSize}px`,
                backgroundColor: dotColor,
                opacity: Math.max(0.1, opacity - (i * 0.05) - (j * 0.05)),
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          )
        }
      }
    }

    return { dots, maxWidth, maxHeight }
  }

  const { dots, maxWidth, maxHeight } = generateDots()

  return (
    <div style={{
      position: 'absolute',
      [position.y]: 0,
      [position.x]: 0,
      width: `${maxWidth}px`,
      height: `${maxHeight}px`,
      pointerEvents: 'none',
      zIndex: 0,
      margin: `${margin}px`,
      overflow: 'visible',
      transform: `rotate(${getRotation()}deg)`,
      // transformOrigin: `${position.x} ${position.y}`,
    }}>
      {dots}
    </div>
  )
}

export default DotPattern