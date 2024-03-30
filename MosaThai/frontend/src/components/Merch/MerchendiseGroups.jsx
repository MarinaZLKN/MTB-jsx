import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MerchandiseItem from './MerchandiseItem';
import '../../styles/MerchPage.scss';

const MerchandiseGroups = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/v1/merchandise-by-category/');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

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

