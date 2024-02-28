import React from 'react';
import '../../../styles/TrainingItem.scss';


const TrainingItem = ({ name, amount }) => {
  return (
    <div className="training-item_price">
      <h3 className="prices-name">{name}</h3>
      <p className="prices-int">{amount} € </p>
    </div>
  );
};

export default TrainingItem;