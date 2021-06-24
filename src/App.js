import './App.css';
import Header from './Components/Header/Header'
import BottomNavigation from './Components/Footer/BottomNavigation'
import SimpleContainer from "./Components/Home/Container";

function App() {
  return (
    <div className="App">
      <Header/>
      <SimpleContainer/>
      <BottomNavigation/>
    </div>
  );
}

export default App;
