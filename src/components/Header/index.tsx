import useUser from './..//User/store'
import useStore from './../Counter/store'

export default function Header () {
  const name = useUser(({ name }) => name)
  const count = useStore(state=>state.count)
  return (
    <div className="flex w-full bg-black text-white justify-between p-4">
      <div>Company</div>
      <div>{name}</div>
      <div>{count}</div>
    </div>
  )  
}