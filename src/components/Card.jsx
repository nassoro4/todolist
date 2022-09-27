import React from 'react';
function Card({ item }) {
  return (
    <>
      <div className="card-container">
        <div className="num-display">
          <div className="num-text"></div>
        </div>
        <div className="card"></div>
      </div>
    </>
  );
}

Card.defaultProps = {};

export default Card;
