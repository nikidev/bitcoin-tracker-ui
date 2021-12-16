import './App.css';
import TradesLineChartComponent from "./components/TradesLineChartComponent";
import UserPriceLimitFormComponent from "./components/UserPriceLimitFormComponent";
import LatestPriceComponent from "./components/LatestPriceComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Bitcoin Tracker</h1>
          <LatestPriceComponent />
          <TradesLineChartComponent />
          <UserPriceLimitFormComponent />
      </header>
    </div>
  );
}

export default App;
