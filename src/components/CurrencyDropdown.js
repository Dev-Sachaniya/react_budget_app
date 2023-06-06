import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './style.css'
const CurrencyDropdown = ({ onCurrencyChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const currencies = ['$ Dollar', '£ Pound', '€ Euro', '₹ Rupee'];

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    onCurrencyChange(selectedCurrency);
  };

  return (
    <Dropdown className="currency-down" >
      <Dropdown.Toggle variant="none" className="currency-down">
        Currency ({selectedCurrency || '£ Pound'})
      </Dropdown.Toggle>

      <Dropdown.Menu className='currency-menu'>
        {currencies.map((currency) => (
          <Dropdown.Item
            onChange={handleCurrencySelect}
            className='currency-menu'
            key={currency}
            active={selectedCurrency === currency}
            onClick={() => handleCurrencySelect(currency)}
          >
            {currency}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CurrencyDropdown;
