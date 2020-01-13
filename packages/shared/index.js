import { useState } from 'react'

export const useTest = () => {
  const [value, setValue] = useState()
  return {
    value, 
    setValue
  }
}