import * as React from "react"

let timer: any

export const useTimer = (initialNumber: number, stepTime: number) => {
  const [number, setNumber] = React.useState(initialNumber)

  //Handling clear
  const handleClear = () => {
    clearInterval(timer)
  }

  //Start timer
  const startTimer = () => {
    timer = setInterval(() => {
      if (number > 0) {
        setNumber((prevNumber) => prevNumber - 1)
      } else {
        handleClear()
      }
    }, stepTime)
  }

  //Handling reset
  const handleReset = () => {
    handleClear()
    setNumber(initialNumber)
    startTimer()
  }

  React.useEffect(() => {
    startTimer()
    return () => {
      handleClear()
    }
  }, [stepTime, number])

  return { number, reset: handleReset }
}
