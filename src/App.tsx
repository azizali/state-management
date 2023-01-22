import './App.css';
import Controls from './components/Counter/Controls'
import View from './components/Counter/View'
import useStore from './components/Counter/store'

function App() {
  const state = useStore(state=> state)
  console.log(state)
  return (
    <div className="App">
      <Controls
        incrementCb={state.increment}
        decrementCb={state.decrement}
      />
      <View value={state.count} />
    </div>
  );
}

export default App;
