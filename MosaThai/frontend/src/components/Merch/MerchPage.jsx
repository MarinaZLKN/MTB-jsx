import React, {useEffect, useState} from 'react';
import Footer from "../Footer";
import '../../styles/MerchPage.scss'
import {Link} from "react-router-dom";
import MerchandiseGroups from "./MerchendiseGroups";
import axios from "axios";


const MerchPage = () => {
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
    <div className="container merch-container">
      <div className="merch-content">
        <Link to="/">
          <button className="p1">Tagasi</button>
        </Link>
        <div className="merch-block">
          <MerchandiseGroups categories={categories} />
        </div>
      </div>
      <footer className="merch-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default MerchPage;