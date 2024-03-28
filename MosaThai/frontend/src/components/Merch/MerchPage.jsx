import React from 'react';
import Footer from "../Footer";
import '../../styles/MerchPage.scss'
import {Link} from "react-router-dom";
import MerchandiseGroups from "./MerchendiseGroups";

const MerchPage = () => {

    return(
        <div className="container merch-container">

            <div className="merch-content">
                <Link to="/">
                    <button className="p1">back</button>
                </Link>
                <div className="merch-block">
                    <MerchandiseGroups/>
                </div>


            </div>
            <footer className="merch-footer">
                    <Footer/>
                </footer>
        </div>
    )
}

export default MerchPage;