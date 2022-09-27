import React from 'react';
import { useContext, useEffect } from 'react';
import TodoContext from './TodoContext';
import Button from './Button';
import RatingSelect from './RatingSelect';

function Form() {
  const {
    handleText,
    message,
    btnDisabled,
    text,
    setRating,
    rating,
    handleAdd,
    setbtnDisabled,
    setText,
    editFeedBack,
    updateFeedback,
  } = useContext(TodoContext);

  useEffect(() => {
    if (editFeedBack.edit === true) {
      setbtnDisabled(false);
      setText(editFeedBack.item.text);
      setRating(editFeedBack.item.rating);
    }
  }, [editFeedBack]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      if (editFeedBack.edit === true) {
        updateFeedback(editFeedBack.item.id, newFeedback);
      } else {
        handleAdd(newFeedback);
      }

      setbtnDisabled(!btnDisabled);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          backgroundColor: 'aliceblue',
          maxWidth: '540px',
          margin: 'auto',
          padding: '12px',
          borderRadius: '12px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ marginBottom: '12px' }}>
          How would you our services with us?
        </h3>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div
          style={{
            border: 'thin solid gray',
            display: 'flex',
            padding: '2px',
            borderRadius: '8px',
            justifyContent: 'center',
            flexGrow: '8',
          }}
        >
          <input
            type="text"
            style={{
              padding: '6px',
              border: 'none',
              outline: 'none',
              borderRadius: '4px',
              resize: 'none',
              backgroundColor: 'transparent',
              flexGrow: '8',
            }}
            value={text}
            placeholder="write your review"
            onChange={handleText}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </div>
    </form>
  );
}

export default Form;
