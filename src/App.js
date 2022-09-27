import React from 'react';
import './index.css';
import Header from './components/Header';
import FeedbackItems from './components/FeedbackItems';
import AverageRating from './components/AverageRating';
import { TodoContextProvider } from './components/TodoContext';
import Form from './components/Form';
function App() {
  return (
    <TodoContextProvider>
      <Header />
      <Form />
      <AverageRating />
      <FeedbackItems />
    </TodoContextProvider>
  );
}

export default App;
