import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from '../components/ExpenseTotal';


const Budget = ({ currency }) => {
  const { budget, dispatch } = useContext(AppContext);
  const [editable, setEditable] = useState(false);
  const [updatedBudget, setUpdatedBudget] = useState(budget);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    if (updatedBudget > 20000) {
      alert(`Budget value cannot exceed 20000`);
      return;
    }

    if (budget < ExpenseTotal) {
      alert("Budget cannot be lower than spending");
      return;
    }

    dispatch({
      type: 'UPDATE_BUDGET',
      payload: updatedBudget,
    });
    setEditable(false);
  };


  return (
    <div className='alert alert-secondary'>
      {editable ? (
        <div>
          Budget: {currency}
          <input
            type='number'
            value={updatedBudget}
            onChange={(e) => setUpdatedBudget(parseInt(e.target.value))}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>Budget: {currency}{updatedBudget}</span>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Budget;
