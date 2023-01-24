import Section from '../../Section'

type PropTypes = {
  incrementCb: ()=> void
  decrementCb: ()=> void
}

export default function Controls({
  incrementCb,
  decrementCb
}: PropTypes) {
  return (
    <Section>
      <button className="border-2 p-1 rounded" onClick={incrementCb}>Increment</button>
      <button className="border-2 p-1 rounded" onClick={decrementCb}>Decrement</button>
    </Section>
  );
}
