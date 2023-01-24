type Props = {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode
}

export default function Section({ children }: Props){
  return (<div className="p-4 border-2">
    {children}
  </div>)
}