import Store from '../../Store'

type StateShape = {
  name: string
}

const store = new Store({ name: "" } satisfies StateShape)

export default store.useStore
export const setState = store.setState