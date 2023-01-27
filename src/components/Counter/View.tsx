type PropTypes = {
  value: number
}

export default function View({ value }: PropTypes) {
  return (
    <>
      Count: {value}
    </>
  );
}
