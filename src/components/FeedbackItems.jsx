import React from 'react';
import DelButton from './DelButton';
import { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import TodoContext from './TodoContext';
function FeedbackItems() {
  const { Feedbacks, delHandler, handleEdit } = useContext(TodoContext);

  if (!Feedbacks || Feedbacks.length === 0) {
    return (
      <>
        <div className="card-container">
          <div className="num-display">
            <div className="num-text">0</div>
          </div>
          <div className="card">No Items Yet!</div>
        </div>
      </>
    );
  } else
    return (
      <>
        {Feedbacks.map((item) => (
          <div key={item.id}>
            <div className="card-container">
              <div className="num-display">
                <div className="num-text">{item.rating}</div>
              </div>
              <div className="btn-container">
                <DelButton item={item} delHandler={(id) => delHandler(id)} />
                <div style={{ marginLeft: '12px' }}>
                  <button
                    style={{
                      padding: '6px',
                      backgroundColor: '#f1f4f6',
                      border: 'none',
                    }}
                    onClick={() => handleEdit(item)}
                  >
                    <h3>
                      {' '}
                      <FaEdit />
                    </h3>
                  </button>
                </div>
              </div>
              <div className="card">{item.text}</div>
            </div>
          </div>
        ))}
      </>
    );
}

export default FeedbackItems;
