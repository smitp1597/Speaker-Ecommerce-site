import './App.css';
import Landing from './components/landing.js';
import Pricing from './components/pricing';
import Payment from './components/payment';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Landing} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/payment" component={Payment} />
      </div>
    </Router>
  );
}

export default App;
