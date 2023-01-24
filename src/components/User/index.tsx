import useUserStore from './store'

export default function User () {
  const { name, setName } = useUserStore(({ name, setName }) => ({ name, setName }))

  return (
    <input
      type="text"
      value={name}
      onChange={({ target }) => setName((target as HTMLInputElement).value)}
    />
  )
}