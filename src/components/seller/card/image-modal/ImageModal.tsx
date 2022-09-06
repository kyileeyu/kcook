import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import 'src/styles/seller/card/image-modal/ImageModal.scss';

import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';

interface Props {
    num: any,
    setNum: any,
    resize: any,

    imageModalShow: any,
    setImageModalShowF: any,

    imageData: any,
    setImageDataF: any,
}

type userType = {
    [key: string]: any;
}

function ImageModal ({
        num, setNum, resize,
        imageModalShow, setImageModalShowF, 
        imageData, setImageDataF,
    }: Props) {
    var jwToken: any = undefined;
    if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
    else jwToken = sessionStorage.jwToken;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState(imageData);

    const UpdateImageF = useCallback((e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
        if (!e.target.files) return;

        const formData = new FormData();
        formData.append('image', e.target.files[0]);

        axios({
            baseURL: 'https://prod.kcook-cake.com/',
            url: '/app/banner/carousel',
            method: 'POST',
            data: {
                "bannerListReq[0].connectedUrl": "https://k-cook-s3.s3.ap-northeast-2.amazonaws.com/banner/",
                "bannerListReq[0].mobileImage": formData,
                "bannerListReq[0].orders": 1,
                "bannerListReq[0].webImage": formData,
            },
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-ACCESS-TOKEN': jwToken,
            },
          })
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.error(err);
            });
        setNum(num+1);
    },[]);

    useEffect(()=>{
    },[]);

    return (
        <>
        <div className="spm-modal">
            {imageModalShow ? (
            <>
                <div
                className="spm-modal-background"
                style={{ top: window.pageYOffset }}>
                </div>

                <div
                className="spm-modal-box"
                style={{
                    top:
                    resize <= 767 ? 
                    window.innerHeight - 530 < 0 ? window.pageYOffset : window.pageYOffset + 20 : 
                    window.innerHeight - 775 < 0 ? window.pageYOffset : window.pageYOffset + (window.innerHeight - 775) / 2,
                }}>
                <div className="spm-modal-title">이미지 등록</div>
                <div className="spm-modal-subtitle">대표이미지(1장)</div>
                <div className="spm-modal-img-inner">
                    <div className="spm-modal-img-inner">
                        <label                             
                            className={classNames("spm-add-img spm-add-add-img", {
                                "spm-add-add-img-icon": image[0] == '',
                            })} 
                            htmlFor="spm-file-0">
                            {image[0] == '' ?
                                <AddIcon/>:
                                <img src={image[0]} />
                            }
                        </label>
                        <input
                            id="spm-file-0"
                            type="file"
                            accept="image/*"
                            ref={inputRef}
                            onChange={(e)=>UpdateImageF(e, 0)}
                        />
                    </div>
                </div>

                <div className="spm-modal-subtitle">추가이미지(최대 4장)</div>
                <div className="spm-modal-img-box">
                    {[1, 2, 3, 4].map((data: any, )=>{
                        return (
                            <div className="spm-modal-img-inner">
                                <label                             
                                    className={classNames("spm-add-img spm-add-add-img", {
                                        "spm-add-add-img-icon": image[data] == '',
                                    })} 
                                    htmlFor={"spm-file-"+data}>
                                    {image[data] == '' ?
                                        <AddIcon/>:
                                        <img src={image[data]} />
                                    }
                                </label>
                                <input
                                    id={"spm-file-"+data}
                                    type="file"
                                    accept="image/*"
                                    ref={inputRef}
                                    onChange={(e)=>UpdateImageF(e, data)}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="spmdetail-content-btn-box">
                    <button
                        className="spmdetail-content-btn spm-modal-btn-box"
                        onClick={() => {
                            setImageDataF(image);
                            setImageModalShowF(false);
                            setNum(num+1);
                        }}>
                        닫기
                    </button>
                    {/* <button
                        className="spmdetail-content-btn spmdetail-content-btn-left"
                        onClick={() => {
                            setImage(imageData);
                            setImageModalShowF(false);
                            setNum(num+1);
                        }}>
                        취소
                    </button> */}
                </div>
                </div>
            </>
            ) : null}
        </div>
        </>
    );
}

export default ImageModal;