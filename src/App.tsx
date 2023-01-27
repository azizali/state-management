import { useEffect } from 'react'
import './App.css';
import Controls from './components/Counter/Controls'
import View from './components/Counter/View'
import User from './components/User/UserClass';
import useStore from './components/Counter/store'
import userstore from './components/User/storeClass'
import Section from './components/Section';

function App() {
  const {
    increment,
    decrement,
    count,
    getCount
  } = useStore(({ increment, decrement, getCount, count }) => ({ increment, decrement, getCount, count }))
  
  const fullCountState = useStore((state) => state)
  const fullUserState = userstore((state) => state)

  useEffect(()=>{
    getCount()
  }, [getCount])

  return (
    <>
      <div className="grid gap-4 w-[1200px] mx-auto p-6">
        <Section title="Raw States">
          <p>Full Count State:</p>
          <pre>
            {JSON.stringify(fullCountState, null, 4)}
          </pre>

          <p>Full User State:</p>
          <pre>
            {JSON.stringify(fullUserState, null, 4)}
          </pre>
        </Section>
        <Section title="Component: User">
          <User />
        </Section>
        <Section title="Component: Controls">
          <p>A separate component is updating <code className="bg-yellow-100">count</code> to a store not in the same heirarchy</p>
          <Controls
            incrementCb={increment}
            decrementCb={decrement}
          />
        </Section>
        <Section title="Component: View">
          <p>Initial Count is received asycronously via an API</p>
          <View value={count} />
        </Section>
      </div>
    </>
  );
}

export default App;
