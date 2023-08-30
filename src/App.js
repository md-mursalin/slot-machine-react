
import './App.css';
import Slots from "./Slots";
function App() {
  return (
    <div className="App">
      <Slots
        val1="🍌"
        val2="🍎"
        val3="🍎"
      />

        <Slots
            val1="🍌"
            val2="🍌"
            val3="🍌"
        />
    </div>
  );
}

export default App;
