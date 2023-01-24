import { create } from 'zustand'
import useCounter from './../Counter/store'

interface StateX {
  name: string
  setName: (name: string) => void
}

export default create<StateX>()((set) => ({
  name: "",
  
  setName: (name: string) => set((state) => {
    // Custom Logic
    // If name length is small update state
    // Else do not update name + increment count
    if(name.length < 5) return { name }
    
    const increment = useCounter.getState().increment
    increment()
    return { name: state.name }
  })
}))
