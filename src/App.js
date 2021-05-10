import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import AccountSummary from './components/AccountSummary'
import TransactionHistory from './components/TransactionHistory'
import AddTranscation from './components/AddTransaction'
import {GlobalProvider} from './components/GlobalState'

function App() {
  return (
    <div className="App">

      <GlobalProvider>
        <Header/>

        <div className="container">

            <Balance/>
            <AccountSummary/>
            <TransactionHistory />
            <AddTranscation/>

        </div>
        </GlobalProvider>
    </div>
  );
}

export default App;
