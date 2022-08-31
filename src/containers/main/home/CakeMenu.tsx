import React,  { useEffect, useState }from 'react';
import '../../../styles/main/home/CakeStoreMenu.scss'

import axios from 'axios';

import SectionTitle from '../../../components/main/card/SectionTitle';
import getAxios from 'src/utils/getAxios';
import CakeCard from 'src/components/main/card/CakeCard';

function CakeMenu (){
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    useEffect(()=>{
        getAxios(setData, setDataLength, "representative-cake", [], 4, 0, 0);
    },[]);

    return(
        <div className="home-flex">
            <div className="cake-store-menu cakemenu home">
                <div className="title">
                    <SectionTitle title="케이크" link="Cake"/>
                </div>
                <div className="contents">
                    <CakeCard getData={data} cakeDetail={false}/>
                </div>
            </div>
        </div>
    )
}


export default CakeMenu;