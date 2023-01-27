type PropTypes = {
  incrementCb: ()=> void
  decrementCb: ()=> void
}

export default function Controls({
  incrementCb,
  decrementCb
}: PropTypes) {
  return (
    <div className="flex gap-2">
      <button className="btn" onClick={()=>decrementCb()}>- Count</button>
      <button className="btn" onClick={()=>incrementCb()}>+ Count</button>
    </div>
  );
}
