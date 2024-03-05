import React from 'react';
import Slider from 'react-slick';
import '../../styles/MerchPage.scss';

const MerchandiseItem = ({item}) => {

    console.log('ITEM: ', item)

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="merch-item">
            <div className="merch-item-slider">
                 <Slider {...sliderSettings}>
                {item.photo1 && <img src={`http://127.0.0.1:8000${item.photo1}`} className="merch-image" alt={item.name} />}
                {item.photo2 && <img src={`http://127.0.0.1:8000${item.photo2}`} className="merch-image" alt={item.name} />}
                {item.photo3 && <img src={`http://127.0.0.1:8000${item.photo3}`} className="merch-image" alt={item.name} />}
            </Slider>
            </div>

            <div className="merch-item-info">
                <h3 className="merch-item-title">{item.name}</h3>
            <p className="merch-item-desc">{item.description}</p>
            <p className="merch-item-price">{item.price}€</p>

            <p className="merch-item-availibe">Available Quantity: {item.available_quantity}</p>
            <p className="merch-item-size">
                Sizes: {item.sizes.map((size) => size.name).join(', ')}
            </p>
            </div>

        </div>
    );
};

export default MerchandiseItem;
