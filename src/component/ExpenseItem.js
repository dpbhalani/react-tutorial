import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2023, 3 ,10);
    const expenseTitle = "car insurance";
    const expensePrice = 153.25; 

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h3>{expenseTitle}</h3>
        <div className='expense-item__price'>${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
