import { create } from 'zustand'

interface StateX {
  count: number
  increment: ()=> void
  decrement: ()=> void
}

export default create<StateX>()(set => {
  return {
    count: 1,
    increment: () => set((state) => {
      return {
        count: state?.count + 1
      }
    }),
    decrement: ()=> set((state) => {
      return {
        count: state?.count - 1
      }
    })
  }
})