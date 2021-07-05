import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';




test ('Show and Hide New Expense Form', () => {

  render (<App/>)
  
  const addExpenseButton = screen.getByText(/Add New Expense/i);
  expect(addExpenseButton).toBeInTheDocument();
  fireEvent.click(addExpenseButton);
  
  const title = screen.getByText(/Title/i);
  const amount = screen.getByText(/Amount/i);
  const date = screen.getByText(/Date/i);
  expect(title).toBeInTheDocument();
  expect(amount).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  
  const cancelButton = screen.getByText(/Cancel/i);
  fireEvent.click(cancelButton);
  expect(screen.getByText(/Add New Expense/i)).toBeInTheDocument();
  expect(title).not.toBeInTheDocument();
})



test('renders "Filter by year" select option', () => {
  render(<App/>);
  const selectFilter2021 = screen.getByDisplayValue(/2021/i);
  expect(selectFilter2021).toBeInTheDocument();
  
  fireEvent.click(selectFilter2021);

  const selectFilter2022 = screen.getByText(/2022/i);
  const selectFilter2023 = screen.getByText(/2023/i);
  const selectFilter2024 = screen.getByText(/2024/i);
  const selectFilter2025 = screen.getByText(/2025/i);

  
  expect(selectFilter2021).toBeInTheDocument();
  expect(selectFilter2022).toBeInTheDocument();
  expect(selectFilter2023).toBeInTheDocument();
  expect(selectFilter2024).toBeInTheDocument();
  expect(selectFilter2025).toBeInTheDocument();
})


test('display amount in expense list', () => {
  render(<App/>) 

  const amount = screen.getByText(/100000/i)
  expect(amount).toBeInTheDocument();
})

