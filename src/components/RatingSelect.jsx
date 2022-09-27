import React from 'react';
import { useState, useContext, useEffect } from 'react';
import TodoContext from './TodoContext';

function RatingSelect({ select }) {
  const [Selected, setSelected] = useState(9);
  const { editFeedBack } = useContext(TodoContext);

  useEffect(() => {
    setSelected(editFeedBack.item.rating);
  }, [editFeedBack]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <ul>
      <li>
        <input
          type="radio"
          name="num1"
          value="1"
          onChange={handleChange}
          checked={Selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="num2"
          value="2"
          onChange={handleChange}
          checked={Selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="num3"
          value="3"
          onChange={handleChange}
          checked={Selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="num4"
          value="4"
          onChange={handleChange}
          checked={Selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="num5"
          value="5"
          onChange={handleChange}
          checked={Selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="num6"
          value="6"
          onChange={handleChange}
          checked={Selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="num7"
          value="7"
          onChange={handleChange}
          checked={Selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="num8"
          value="8"
          onChange={handleChange}
          checked={Selected === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="num9"
          value="9"
          onChange={handleChange}
          checked={Selected === 9}
        />
        <label htmlFor="num7">9</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
