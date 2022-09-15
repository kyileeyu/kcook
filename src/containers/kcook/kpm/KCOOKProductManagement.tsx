import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ReactComponent as AddIcon } from '../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../assets/seller/copybtn.svg';
import addIcon from '../../assets/seller/spm-add.png';

import SPMCard from 'src/components/seller/spm-ssr/SPMCard';
import SPMCard_Add from 'src/components/seller/spm-ssr/SPM_Add';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import LinkClick from 'src/utils/LinkClick';
import SPM_Update from 'src/components/seller/spm-ssr/SRM_Update';
import KPMCard from 'src/components/kcook/kpm/KPMCard';

function KCOOKProductManagement() {
  const [num, setNum] = useState(0);

  const [oriShow, setOriShow] = useState<any>([]);
  const [oriImage, setOriImage] = useState([
    [
      'https://www.codingfactory.net/wp-content/uploads/abc.jpg',
      '',
      '',
      '',
      '',
    ],
    ['', '', '', '', ''],
  ]);
  const [oriData, setOriData] = useState([
    {
      name: '케이크1',
      image: '',
      price: 1000,
      list: [
        {
          optionId: 1,
          optionName: '크기',
          optionList: [
            {
              optionListId: 1,
              optionListName: '1호',
              optionListPrice: 1000,
            },
            {
              optionListId: 2,
              optionListName: '2호',
              optionListPrice: 1000,
            },
            {
              optionListId: 3,
              optionListName: '3호',
              optionListPrice: 1000,
            },
            {
              optionListId: 4,
              optionListName: '텍스트&아',
              optionListPrice: 0,
            },
            {
              optionListId: 5,
              optionListName: '텍스트&',
              optionListPrice: 0,
            },
          ],
          optionImage: false,
          optionImageText: '',
        },
        {
          optionId: 2,
          optionName: '맛',
          optionList: [
            {
              optionListId: 1,
              optionListName: '딸기',
              optionListPrice: 1000,
            },
          ],
          optionImage: false,
          optionImageText: '',
        },
      ],
    },
    {
      name: '케이크2',
      image: '',
      price: 0,
      list: [
        {
          optionId: 1,
          optionName: '크기',
          optionList: [
            {
              optionListId: 1,
              optionListName: '1호',
              optionListPrice: 1000,
            },
          ],
          optionImage: false,
          optionImageText: '',
        },
      ],
    },
  ]);

  const [addShow, setAddShow] = useState(false);

  const [resize, setResize] = useState(0);
  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    LinkClick('KCOOKProductManagement');
    sellerLinkClick('KCOOKProductManagement');

    setResize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    for (var i = 0; i < oriData.length; i++) {
      oriShow[i] = true;
    }

    if (resize > 767) {
      $('.spm-modal').on('scroll touchmove mousewheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    }
  }, []);

  return (
    <>
      <div className="seller-mypage-top-flex">
        <div className="spm-ssr-mobile-box">
          {/* title */}
          <div className="seller-mypage-top spm-ssr-title">
            <div className="seller-mypage-front-title">상품관리</div>
            <div className="seller-mypage-middle-title">
              현재 판매 중인 상품입니다
            </div>
          </div>
          <div className="mobile" style={{ width: '5px', height: '25px' }}></div>

          <div className="seller-content">
            {oriData.map((data: any, idx: any) => {
              return (
                <>
                  <KPMCard
                    idx={idx}
                    num={num}
                    setNum={setNum}
                    oriShow={oriShow}
                    oriData={oriData}
                    oriImage={oriImage}
                  />
                </>
              );
            })}

          </div>
        </div>
        
      </div>
    </>
  );
}

export default KCOOKProductManagement;