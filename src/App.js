import './App.css';
import { View } from "./components/View"
import { Sliders } from "./components/Sliders"

// ----------------------------------------------------------------------------
// The App
// ----------------------------------------------------------------------------
function App() {
  return (
    <div className="App">
      <header id="header">
        <p>Testing React with ITowns.</p>
      </header> 
      <div id="sliders">
        <Sliders />
      </div>
      <div id="view">
        <View />
      </div>
    </div>
  );
}
export default App;