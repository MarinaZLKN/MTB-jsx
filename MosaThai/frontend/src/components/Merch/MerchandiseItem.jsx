import React from 'react';

const MerchandiseItem = ({ item }) => {
  return (
    <div className="merch-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <img src={item.photo1} alt={item.name} />
      <p>Available Quantity: {item.available_quantity}</p>
      <p>
        Sizes: {item.sizes.map((size) => size.name).join(', ')}
      </p>
    </div>
  );
};

export default MerchandiseItem;
