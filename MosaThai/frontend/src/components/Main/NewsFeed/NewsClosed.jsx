import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewsClosed = ({news}) => {
    const [isOpen, setIsOpen] = useState(false);

     const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '10px',
      variableWidth: true,
      centerMode: true,

    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
            centerPadding: '10px',
            variableWidth: true,
            centerMode: true,
          dots: false,
          // nextArrow: <EmptyArrow />,
          // prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const toggleNews = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="news-container-content-all">
            {isOpen ? (
                <div className="news-container-open">
                    <h2 className="news-title1">{news.title}</h2>
                    <div className="news-container-content">
                        <div className="news-slider">
                            <Slider{...settings}>
                                {news.video && (
                                    <div className="news-video-container">
                                        <video controls className="news-video">
                                            <source src={news.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                )}
                                {Object.keys(news)
                            .filter(key => key.startsWith('photo') && news[key])
                            .map((key, index) => (
                                <div key={index}>
                                    <img src={news[key]} alt={`Photo ${index}`} className="news-image" />
                                </div>
                            ))}
                            </Slider>
                        </div>
                        <div className="news-wrapper1-open">
                            <p className="news-date1">{formatDate(news.date_created)}</p>
                            <div className="news-content">{news.text}</div>
                            <button className="news-button2" onClick={toggleNews}>Close</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="news-container-closed">
                    <img src={news.photo1} alt={news.title} className="news-image1"/>
                    <div className="news-wrapper1">
                        <p className="news-date1">{formatDate(news.date_created)}</p>
                        <h2 className="news-title1">{news.title}</h2>
                        <button className="news-button1" onClick={toggleNews}>Read more</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsClosed;






