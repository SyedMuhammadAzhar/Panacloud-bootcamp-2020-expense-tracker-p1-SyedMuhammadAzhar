import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import AccountSummary from './components/AccountSummary'
import TransactionHistory from './components/TransactionHistory'
import AddTranscation from './components/AddTransaction'

function App() {
  return (
    <div className="App">


        <Header/>

        <div className="container">

            <Balance/>
            <AccountSummary/>
            <TransactionHistory />
            <AddTranscation/>

        </div>
    </div>
  );
}

export default App;
