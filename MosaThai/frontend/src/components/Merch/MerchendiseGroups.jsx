import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MerchandiseItem from './MerchandiseItem';

const MerchandiseGroups = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/v1/category/');
        setCategories(response.data);
        console.log("Categories", response.data)
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <div>
      <h2>Merchandise Groups</h2>

    </div>
  );
};

export default MerchandiseGroups;
