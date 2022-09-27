import React from 'react';
import Feedback from './Feedbacks';
import { useState } from 'react';
import { useContext } from 'react';
import TodoContext from './TodoContext';
function AverageRating() {
  const { Feedbacks, TotalAv } = useContext(TodoContext);
  return (
    <div
      style={{
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3 style={{ color: 'white', marginRight: '64px' }}>
          {Feedbacks.length} Reviews
        </h3>
        <h3 style={{ color: 'white' }}>
          Average Rating {isNaN(TotalAv) ? 0 : TotalAv}
        </h3>
      </div>
    </div>
  );
}

export default AverageRating;
