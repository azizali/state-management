import useUserStore, {setState} from './storeClass'

export default function User () {
  const { name } = useUserStore(({ name }) => ({ name }))

  return (
    <>
      <input
        autoFocus
        placeholder='First Name'
        name='firstName'
        className='border p-3'
        type="text"
        value={name}
        onChange={({ target }) => setState(()=> ({ name: target.value }))}
      />
    </>
  )
}