import {useEffect, useState } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";



const usersData = [
  { 
    firstName: "avion",
    lastName: "school",
    email: "avion@gmail.com",
    contact: "0921",
    username: "avion",
    password: "qwerty",
    expenses: {
      category: "Housing",
      amount: 100000,
      notes: "travel to mars",
      date: new Date(2023, 3, 25),
      type: "expense",
      id: 10
    },
    budget: {
      category: "Food",
      amount: 1000000,
      date: new Date(2021, 5),
      type: "budget",
      id: 40
    },

  },
  { 
    firstName: "a",
    lastName: "school2",
    email: "avion2@gmail.com",
    contact: "0921",
    username: "a",
    password: "a",
  }
];




function App() {

  let accountsDataBase = JSON.parse(localStorage.getItem("accountsDataBase"))
  accountsDataBase = accountsDataBase ?  accountsDataBase : usersData;
  
  const [users, setUsers] = useState(accountsDataBase);
  const addUserHandler = (newUser) => {
    setUsers((oldUsers) => {
      return [newUser, ...oldUsers];
    })
  }
  //Store users in local storage after state has changed
  useEffect(() => localStorage.setItem("accountsDataBase", JSON.stringify(users)), [users]);
  // localStorage.clear("accountsDataBase")


  const [currentUser, updateCurrentUser] = useState({});
  const isLoggedInHandler = (foundUser) => {
    updateCurrentUser(foundUser);
  }


  const expensesAndBudgetHandler = (expensesOrBudget) => {
    const [value, type] = expensesOrBudget;
    const userIndex = users.findIndex((user) => {
      return user.username === currentUser.username
    })

    if(type === "expenses") { currentUser.expenses = value; }
    if(type === "budget") { currentUser.budget = value; }
    setUsers((users) => {
      users[userIndex] = currentUser;
      return [...users];
    })

  }


  return (
    <div className="App">
      <Header />
      <MainSection registerUsers={addUserHandler} registeredAccounts={users} isUserLoggedIn={isLoggedInHandler} expensesHandler={expensesAndBudgetHandler} budgetHandler={expensesAndBudgetHandler} currentUser={currentUser}/>
    </div>
  );
};

export default App;
