import React from 'react';
import { FaTrash } from 'react-icons/fa';
function DelButton({ item, delHandler }) {
  return (
    <div>
      <button
        style={{
          padding: '6px',
          backgroundColor: '#f1f4f6',
          border: 'none',
        }}
        onClick={() => delHandler(item.id)}
      >
        <h3>
          {' '}
          <FaTrash />
        </h3>
      </button>
    </div>
  );
}

export default DelButton;
