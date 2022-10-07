import React, { useState, useEffect, useRef, useCallback } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import $ from 'jquery';
import 'src/styles/common/modal/Modal.scss';
import 'src/styles/seller/sss/modal/ImageModalLogo.scss';

import addImage from 'src/assets/seller/sso-ssh/image-add.png'
import { ReactComponent as AddIcon } from 'src/assets/seller/add-icon.svg';
import KCOOKScroll from 'src/utils/KCOOKScroll';

interface Props {
  NumF: Function,
  resize: number[],

  imageModalShow: boolean,
  setImageModalShowF: Function,

  imageData: string[],
  setImageDataF: Function,
  
  logoImgSrc: string,
  setLogoImgSrc: Function,
}

const ImageModalLogo = ({
        NumF, resize, 
        imageModalShow, setImageModalShowF, 
        imageData, setImageDataF,
        logoImgSrc, setLogoImgSrc
    }: Props) => {

    const AddImageF = () => {
        for (var i=1; i<6; i++) {
            formData.append(
                "productImage"+(i),
                new Blob([JSON.stringify(formData.get("productImage"+(i)))], { type: "application/json" })
            )
        }
        // console.log(getData);
        /*
        axios({
            url: "app/products",
            method: "POST",
            data: {
                isTodayShow: false,
                maxOfToday: addMax,
                isTodayCake: addTodayCake,
                name: addName,
                newOptionsList: Option2List(addOption),
                price: addPrice,
                salePrice: 0,
                todaySaleNumber: 0
            },
            headers: {
                'Content-Type': 'application/json',
                'X-ACCESS-TOKEN' : (sessionStorage.jwToken === undefined? localStorage.jwToken: sessionStorage.jwToken),
            },
        }).then((res: any)=>{
            console.log(res);
            alert('추가 성공');
            setAddShowF(false);
        }).catch((err: any)=>{
            alert('추가 실패');
        })
        */
        /*
        axios({
            url: "/app/products/105/photos",
            method: "PATCH",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarybuOGBs9coioS5Kb9',
                'X-ACCESS-TOKEN' : (sessionStorage.jwToken === undefined? localStorage.jwToken: sessionStorage.jwToken),
            },
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        */
    }

    const UpdateImageF = () => {
        for (var i=1; i<6; i++) {
            formData.append(
                "productImage"+(i),
                new Blob([JSON.stringify(formData.get("productImage"+(i)))], { type: "application/json" })
            )
        }
        // console.log(cakeId);
        /*
        axios({
            url: "/app/products/105/photos",
            method: "PATCH",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarybuOGBs9coioS5Kb9',
                'X-ACCESS-TOKEN' : (sessionStorage.jwToken === undefined? localStorage.jwToken: sessionStorage.jwToken),
            },
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        */
    }

    const MakeFormDataF = useCallback((e: React.ChangeEvent<HTMLInputElement>, idx: any) => {
        if (idx === 0) imageChange();
        else if (idx === 1) imageChange1();
        else if (idx === 2) imageChange2();
        else if (idx === 3) imageChange3();
        else imageChange4();

        formData.set("productImage"+(idx+1), e.target.files[0]);
        setFormData(formData);
        for (var i=1; i<6; i++)
            if (imageTF[i-1]) {
                formData.set("productImage"+(i), null);
                setFormData(formData);
            }
        NumF();
    },[]);

    let [imageTF, setImageTF] = useState([true, true, true, true, true]);
    const [preImage, setPreImage] = useState<File>(); const [preImage1, setPreImage1] = useState<File>(); const [preImage2, setPreImage2] = useState<File>(); const [preImage3, setPreImage3] = useState<File>(); const [preImage4, setPreImage4] = useState<File>();
    const [addPhoto, setAddPhoto] = useState<string>(); const [addPhoto1, setAddPhoto1] = useState<string>(); const [addPhoto2, setAddPhoto2] = useState<string>(); const [addPhoto3, setAddPhoto3] = useState<string>(); const [addPhoto4, setAddPhoto4] = useState<string>();
    const photoInput = useRef<HTMLInputElement>(); const photoInput1 = useRef<HTMLInputElement>(); const photoInput2 = useRef<HTMLInputElement>(); const photoInput3 = useRef<HTMLInputElement>(); const photoInput4 = useRef<HTMLInputElement>();
    
    const imageChange = () => {
        const file = photoInput.current.files[0];
        if (file && file.type.substr(0, 5) === "image")
            setPreImage(file);
        else
            setPreImage(null);
        imageTF[0] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto(reader.result as string);
            };
            reader.readAsDataURL(preImage);
        } else
            setAddPhoto(null);
    },[preImage]);

    const imageChange1 = () => {
        const file = photoInput1.current.files[0];
        if (file && file.type.substr(0, 5) === "image")
            setPreImage1(file);
        else
            setPreImage1(null);
        imageTF[1] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage1) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto1(reader.result as string);
            };
            reader.readAsDataURL(preImage1);
        } else
            setAddPhoto1(null);
    },[preImage1]);

    const imageChange2 = () => {
        const file = photoInput2.current.files[0];
        if (file && file.type.substr(0, 5) === "image") 
            setPreImage2(file);
        else 
            setPreImage2(null);
        imageTF[2] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage2) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto2(reader.result as string);
            };
            reader.readAsDataURL(preImage2);
        } else
            setAddPhoto2(null);
    },[preImage2]);

    const imageChange3 = () => {
        const file = photoInput3.current.files[0];
        if (file && file.type.substr(0, 5) === "image")
            setPreImage3(file);
        else
            setPreImage3(null);
        imageTF[3] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage3) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto3(reader.result as string);
            };
            reader.readAsDataURL(preImage3);
        } else
            setAddPhoto3(null);
    },[preImage3]);

    const imageChange4 = () => {
        const file = photoInput4.current.files[0];
        if (file && file.type.substr(0, 5) === "image")
            setPreImage4(file);
        else
            setPreImage4(null);
        imageTF[4] = false;
        setImageTF(imageTF);
        NumF();
    }
    useEffect(()=>{
        if (preImage4) {
            var reader: any = new FileReader();
            reader.onloadend = () => {
                setAddPhoto4(reader.result as string);
            };
            reader.readAsDataURL(preImage4);
        } else
            setAddPhoto4(null);
    },[preImage4]);


    let [formData, setFormData] = useState(new FormData);
    useEffect(()=>{
        for (var i=1; i<6; i++) {
            formData.append("productImage"+(i), null); setFormData(formData);
        }
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
                    className="sss-logo-modal-box"
                    style={{
                        top: resize[0] <=767? 
                            window.pageYOffset+20 : 
                            resize[1] < 400?
                            window.pageYOffset:
                            window.pageYOffset + (resize[1] - 400) / 2,
                        left: resize[0] <= 767 ? 20 : (resize[0] - 270) / 2,
                    }}>
                    <div className='sss-logo-modal-inner'>

                        <div className="spm-modal-title">이미지 등록</div>
                        <div className="spm-modal-subtitle">대표이미지(1장)</div>
                        <div className="spm-modal-img-inner">
                            <div className="sss-logo-modal-img-flex">
                                <form>
                                    <button
                                        onClick={(e)=>{
                                            e.preventDefault();
                                            photoInput.current.click();
                                        }}>
                                        <div className='sss-logo-modal-img'>
                                            {imageTF[0]? 
                                                (imageData[0]===''||imageData[0]===null||imageData[0]===undefined?
                                                    <div className='sss-logo-modal-img-inner-icon'>
                                                        <AddIcon />
                                                    </div>:
                                                    <img src={imageData[0]}/>):
                                                <img src={addPhoto}/>
                                            }
                                        </div>
                                    </button>
                                    <input
                                        id="sss-logo-file-0"
                                        className='modal-input'
                                        type="file"
                                        accept="image/*"
                                        ref={photoInput}
                                        onChange={(e)=>MakeFormDataF(e, 0)}
                                    />
                                </form>
                            </div>
                        </div>

                        <div className="spmdetail-content-btn-box spmdetail-btn-box">
                            <button
                                className="spmdetail-content-btn"
                                style={{ margin: 0, }}
                                onClick={() => {
                                    // if (cakeId === 0) AddImageF();
                                    // else UpdateImageF();
                                    setImageModalShowF(false);
                                    KCOOKScroll(false);
                                    NumF();
                                }}>
                                등록
                            </button>
                            {/* <button
                                className="spmdetail-content-btn"
                                style={{ color: "#ea5450", backgroundColor: "#fff", }}
                                onClick={() => {
                                    imageTF[0] = true; imageTF[1] = true; imageTF[2] = true; imageTF[3] = true; imageTF[4] = true; 
                                    setImageTF(imageTF);
                                    setImageModalShowF(false);
                                    NumF();
                                }}>
                                취소
                            </button> */}
                        </div>

                    </div>

                </div>
            </>
            ) : null}
        </div>
        </>
    );
}

export default ImageModalLogo;