import React, {useEffect, useState} from 'react';
import '../../../styles/NewsFeed.scss'

const NewsClosed = ({news}) => {
    console.log('NEWS:', news)
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="news-container">
            <img src={news.photo1} alt={news.title} className="news-image1"/>
            <div className="news-wrapper1">
                <p className="news-date1">{formatDate(news.date_created)}</p>
                <h2 className="news-title1">{news.title}</h2>
                <button className="news-button1">Read more</button>
            </div>


        </div>
    );
};

export default NewsClosed;