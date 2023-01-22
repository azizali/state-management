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
      <button onClick={incrementCb}>Increment</button>
      <button onClick={decrementCb}>Decrement</button>
    </Section>
  );
}
