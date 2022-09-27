import { createContext } from 'react';
import React from 'react';
import { useState } from 'react';
import Feedback from './Feedbacks';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [Feedbacks, setFeedbacks] = useState(Feedback);
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState('');

  const handleText = (e) => {
    if (text === '') {
      setbtnDisabled(true);
      setMessage('');
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('You need atleast 10 characters!');
      setbtnDisabled(true);
    } else {
      setMessage('');
      setbtnDisabled(false);
    }
    setText(e.target.value);
  };

  const Average = Feedbacks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.rating;
  }, 0);
  const TotalAv = (Average / Feedbacks.length).toFixed(1);

  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedbacks([newFeedback, ...Feedbacks]);
  };

  const delHandler = (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      setFeedbacks(Feedbacks.filter((item) => item.id !== id));
    }
  };

  const [editFeedBack, setEditFeedBack] = useState({
    item: {},
    edit: false,
  });

  const handleEdit = (item) => {
    setEditFeedBack({
      item: item,
      edit: true,
    });
  };

  const updateFeedback = (id, upItem) => {
    setFeedbacks(
      Feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    );
  };

  return (
    <TodoContext.Provider
      value={{
        Feedbacks,
        setFeedbacks,
        TotalAv,
        handleText,
        message,
        btnDisabled,
        setbtnDisabled,
        text,
        setRating,
        rating,
        handleAdd,
        delHandler,
        handleEdit,
        setText,
        editFeedBack,
        updateFeedback,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
