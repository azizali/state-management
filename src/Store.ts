import { create } from 'zustand'

class Store<T> {
  public store: any
  public state: T
  
  constructor(state: T) {
    this.store = create(() => state)
    this.state = this.store.getState() satisfies T
  }

  setState = (
    cb: (state: T) => void,
    shouldRelace: boolean = false
  ) => {
    this.store.setState(cb, shouldRelace)
  }

  useStore = (selector: (state: T) => void) => {
    return this.store(selector)
  }
}

export default Store