import React from 'react';
import '../../../styles/Trainer.scss'


const Trainer = ({ id, name, photo, description, is_available }) => {
  return (
    <div className="trainer">
      <img src={photo} alt={name} className="trainer_img"/>
      <div className="trainer_name">{name}</div>
      <div className="trainer_title">Muay Thai coach</div>
      {/*<p className="trainer_description">{description}</p>*/}
      {is_available ? <p className="trainer_availible">Available</p> : <p className="trainer_availible">Not Available</p>}
    </div>
  );
};

export default Trainer;
