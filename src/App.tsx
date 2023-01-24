import { useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Controls from './components/Counter/Controls'
import View from './components/Counter/View'
import User from './components/User';
import useStore from './components/Counter/store'

function App() {
  const {
    increment,
    decrement,
    count
  } = useStore(({ increment, decrement, count }) => ({ increment, decrement, count }))

  useEffect(()=>{
    console.log(increment, decrement, useStore)
  }, [increment, decrement])
  return (
    <>
      <Header />
      <div className="flex">
        <User />
        <Controls
          incrementCb={increment}
          decrementCb={decrement}
        />
        <View value={count} />
      </div>
    </>
  );
}

export default App;
