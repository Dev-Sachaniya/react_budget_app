import React,{ useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown'

import { AppProvider } from './context/AppContext';
const App = () => {
    const [currency, setCurrency] = useState('£');

    const handleCurrencyChange = (selectedCurrency) => {
        setCurrency(selectedCurrency);
    };
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget currency={currency}/>
                    </div>        

                    <div className='col-sm'>
                        <Remaining currency={currency}/>
                    </div>        

                    <div className='col-sm'>
                        <ExpenseTotal currency={currency}/>
                    </div>        
                    <div className='col-sm'>
                        <CurrencyDropdown selectedCurrency={currency} onCurrencyChange={handleCurrencyChange}/>
                    </div>        
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList/>
                    </div>         
                </div>
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>        

                    <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm currency={currency}/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
