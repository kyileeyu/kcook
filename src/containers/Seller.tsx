import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import '../../src/styles/seller/Seller.scss'

import SellerSection from '../containers/seller/SellerSection';
import SellerOrder from '../containers/seller/SellerOrder';
import SalesHistory from '../containers/seller/SalesHistory';
import ProductManagement from '../containers/seller/ProductManagement';
import SellerReview from '../containers/seller/SellerReview';
import SellerStore from '../components/seller/SellerStore';

import Pages from './index';
import FullCalendarApp from '../containers/seller/FullCalendarApp';

interface Props {
    setNumLeftMobileF: any,
}

const Seller = () =>{
    const [pathname, setPathname] = useState("");
    useEffect(()=>{
        var pathname = window.location.pathname;
        if (pathname == "/") pathname = "/Home";
        pathname = pathname.split("/")[1];
        setPathname(pathname);
    },[]);
    return(
        <div className="seller-flex ">
            <div className="seller">
                <>
                    <SellerSection/>
                    <Route exact path="/FullCalendarApp" component={FullCalendarApp} />
                    <Route exact path="/SellerOrder" component={SellerOrder} />
                    <Route exact path="/Saleshistory" component={SalesHistory}/>
                    <Route exact path="/ProductManagement" component={ProductManagement}/>
                    <Route exact path="/SellerReview" component={SellerReview} />
                    <Route exact path="/SellerStore" component={SellerStore} />
                </> 
            </div>
        </div>
    )
}


export default Seller;