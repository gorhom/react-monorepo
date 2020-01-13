import { useState, useCallback } from 'react'

export const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increment = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  const decrement = useCallback(() => {
    setCounter(counter - 1)
  }, [counter])

  return {
    counter, 
    increment,
    decrement
  }
}