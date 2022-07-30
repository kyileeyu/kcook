import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WidthwiseCard from 'src/components/WidthwiseCard';
import LengthwiseCard from 'src/components/LengthwiseCard';

import cake6 from   '../../assets/cake6.png';

function MypageOrderMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="mmo-moobile">
            <div className="sort-by-rec">
                <div className="title">주문내역</div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={data} link=""/>
                </div>
            </div>

            <div className="sort-by-rec" style={{ marginBottom: "23px", }}>
                <div className="title">케이쿡 추천 Pick</div>
                <div className="recommend-contents">
                    <LengthwiseCard getData={data} link="KCOOK"/>
                </div>
            </div>
        </div>
    )
}


export default MypageOrderMobile;