import React, { useEffect, useState } from 'react';
import TrainingItem from './TrainingItem.jsx';
import '../../../styles/TrainingItem.scss'
import Title from '../../Title';


const TrainingList= () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/v1/prices/')
      .then((response) => response.json())
      .then((data) => {
        setTrainings(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container prices-container">
      <div className="prices-title">
        <Title text="Hinnakiri" size="large" color="var(--White)" lineHeight="168px"/>
      </div>
      <div className="prices-prices">
        {trainings.map((training) => (
        <TrainingItem
          key={training.id}
          name={training.name}
          amount={training.amount}

        />
      ))}
      </div>

    </div>
  );
};

export default TrainingList;