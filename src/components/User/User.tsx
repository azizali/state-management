import useUserStore from './store'

export default function User () {
  const { name, setName } = useUserStore(({ name, setName }) => ({ name, setName }))

  return (
    <>
      <input
        autoFocus
        placeholder='First Name'
        name='firstName'
        className='border p-3'
        type="text"
        value={name}
        onChange={({ target }) => setName((target as HTMLInputElement).value)}
      />
    </>
  )
}