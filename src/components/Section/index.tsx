type Props = {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode
}

export default function Section({ children }: Props){
  return (<div>
    {children}
  </div>)
}