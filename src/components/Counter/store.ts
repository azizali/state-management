import { create } from 'zustand'
interface State {
  count: number
  increment: ()=> void
  decrement: ()=> void
  getCount: ()=> void
  // increment100: ()=> void
  // reset: ()=> void
}

// 1. State and Action Creaters are all in one place
// 2. State is immutable but could be replaced
const useStore = create<State>()(set => {
  return {
    count: 0,
    increment: (by: number = 1) => set((state) => ({ count: state?.count + by })),
    decrement: (by: number = 1) => set((state) => ({ count: state?.count - by })),
    getCount: async () => {
      const res = await fetch(`https://jsonmock.hackerrank.com/api/articles?page=1`)
      const json = await res.json()
      set(() => ({ count: json?.total || 0 }))
    }
  }
})

// 3. Actions can be separated out
export const increment100 = () =>  useStore.setState((state)=> ({ count: state.count + 100 }))
export const reset = () =>  useStore.setState((state)=> ({ count: 0 }))

export default useStore
