import React from "react";

function ExpenseForm() {
  <form>
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="number" min="0.01" step="0.01" />
      </div>
      <div>
        <input type="date" min="2019-01-01" max="2022-12-31" />
      </div>
    </div>
    <div>
        <button> type="submit" Add Expense </button>
    </div>
  </form>;
}

export default ExpenseForm;
