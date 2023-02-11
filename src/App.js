import React from "react";
import Expensess from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Anime Pillow",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Gym Membership",
      amount: 100,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Video Games",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Meteye Para",
      amount: 1500,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expensess items={expenses} />
      
    </div>
  );
}

export default App;
