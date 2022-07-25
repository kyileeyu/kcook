import React from 'react';
import '../../../styles/card/SSOMCard.scss';

import rightArrow from "../../../assets/right-arrow.svg";

interface SSOMCardProps {
    getData: any
}

function SSOMCard({getData}: SSOMCardProps) {
    return (
        <>
            <div className="ssomcard-date">어제</div>
            {getData.map((data: { productId: any, name: any, storeName: any, price: any, raiting: any, thumbnail: any, status: any, isCake: any, resultPrice: any, salePrice: any, reviewCount: any, })=>{
                return (
                    <div className="ssomcard"  key={data.productId}>
                        <div className="ssomcard-box">
                            <div className="ssomcard-box-inner">
                                <div className="ssomcard-title">
                                    하트볼터치 곰돌이 케이크
                                </div>
                                <div className="ssomcard-title-date">
                                    픽업예정 15:00
                                </div>
                                <div className="ssomcard-price ssomcard-title">
                                    19,900원
                                </div>
                            </div>
                            <div className="ssomcard-arrow">
                                <img src={rightArrow}/>
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </>
    );
}

export default SSOMCard;