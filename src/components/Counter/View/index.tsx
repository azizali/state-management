import Section from '../../Section'

type PropTypes = {
  value: number
}
export default function View({ value }: PropTypes) {
  return (
    <Section>
      {value}
    </Section>
  );
}
