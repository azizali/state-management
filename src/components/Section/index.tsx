type Props = {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode
  title?: string
}

export default function Section({ children, title }: Props){
  return (<div className="box">
    <div className="text-xs uppercase -mt-8 -ml-4 absolute font-bold bg-white">{title || 'title is blank '}</div>
    {children}
  </div>)
}