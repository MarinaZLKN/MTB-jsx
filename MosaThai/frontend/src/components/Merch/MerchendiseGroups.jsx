import React from 'react';
import MerchandiseItem from './MerchandiseItem';
import '../../styles/MerchPage.scss';

const MerchandiseGroups = ({ categories }) => {
  const hasMerchandise = categories.some(category => category.merchandise.length > 0);

  if (!hasMerchandise) {
    return <p className="merch-soon">Varsti tulemas ;)</p>;
  }

  return (
    <div className="groups">
      {categories.map(category => (
        <div className="groups-title" key={category.category_name}>
          <h3 className="p">{category.category_name}</h3>
          <div className="merchandise-list">
            {category.merchandise.map(merchItem => (
              <MerchandiseItem key={merchItem.id} item={merchItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MerchandiseGroups;

