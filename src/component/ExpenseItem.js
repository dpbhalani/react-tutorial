import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>Date:- march 9 2023</div>
      <div className='expense-item__description'>
        <h3>car insurance</h3>
        <div className='expense-item__price'>$153.25</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
