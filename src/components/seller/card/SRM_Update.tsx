import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../../../styles/seller/card/SPMCard.scss';

import cake6 from   '../../../assets/cake6.png';

import { ReactComponent as AddIcon } from '../../../assets/seller/add-icon.svg';
import { ReactComponent as CloseBtn } from '../../../assets/seller/closebtn.svg';
import { ReactComponent as CopyBtn } from '../../../assets/seller/copybtn.svg';
import { ReactComponent as SettingIcon } from '../../../assets/seller/spr-setting.svg';
import { ReactComponent as DragBtn } from '../../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

import leftArrow from "../../../assets/left-arrow.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import setting from "../../../assets/seller/spm-setting.png";
import ImageModal from './image-modal/ImageModal';

interface Props {
    idx: any,
    num: any,
    setNum: any,
    resize: any,

    oriShow: any,
    getUpdateData: any,
    getUpdateImage: any,
}

function SPM_Update({ 
        idx, num, setNum, resize, 
        oriShow, getUpdateData, getUpdateImage,
    }: Props) {
    
    const handleAddName = (e: any, ) => {
        updateData.name = e.target.value;
    };
    const handleOptionName = (e: any, optionId: any, ) => {
        updateData.list[optionId-1].optionName = e.target.value;
    };
    const handleOptionListName = (e: any, optionId: any, optionListId: any, ) => {
        updateData.list[optionId-1].optionList[optionListId-1].optionListName = e.target.value;
    };
    const handleOptionListPrice = (e: any, optionId: any, optionListId: any, ) => {
        var evalue = e.target.value;
        if (evalue === "NaN") evalue = "0";
        updateData.list[optionId-1].optionList[optionListId-1].optionListPrice = parseInt(evalue);
    };



    const [updateImageModal, setUpdateImageModal] = useState(false);
    const [updateImage, setUpdateImage] = useState([
        getUpdateImage[0],
        getUpdateImage[1],
        getUpdateImage[2],
        getUpdateImage[3],
        getUpdateImage[4],
    ]);
    const [updateImageNum, setUpdateImageNum] = useState(0);
    const [updateData, setUpdateData] = useState({
        name: getUpdateData.name,
        image: getUpdateData.image,
        price: getUpdateData.price,
        list: getUpdateData.list,
    });

    const [startDrag, setStartDrag] = useState(0);
    useEffect(()=>{
        $('#spm-update-name').val(updateData.name);
        $('#spm-update-price').val(updateData.price);
        for (var i=0; i<updateData.list.length; i++) {
            $('#spm-update-option-'+(i+1)).val(updateData.list[i].optionName);
            for (var j=0; j<updateData.list[i].optionList.length; j++) {
                $('#spm-update-name-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionList[j].optionListName);
                $('#spm-update-price-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionList[j].optionListPrice);
                // if (updateData.list[i].optionDirect&&updateData.list[i].optionList.length==updateData.list[i].optionList[j].optionListId)
                //     $('#spm-update-price-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionDirectText);
                // else
                //     $('#spm-update-price-option-list-'+(i+1)+"-"+(j+1)).val(updateData.list[i].optionList[j].optionListPrice);
            }
        }
    },[]);
    
    return (
        <>
            <ImageModal
                num={num} setNum={setNum} resize={resize}
                imageModalShow={updateImageModal} setImageModalShowF={setUpdateImageModal}
                imageData={updateImage} setImageDataF={setUpdateImage}
            />

            <div className="spm-add">
                <div className="spm-add-inner">
                    <div
                        className="move-tap"
                        onClick={()=>{
                            oriShow[idx] = true;
                            setNum(num+1);
                            alert("업데이트"); //updateOption
                            // axios.update
                        }}>
                        <DragBtn/>
                    </div>
                    <div className="spm-add-content">
                        <div
                            className="spm-modal-img-inner"
                            onClick={()=>{
                                setUpdateImageModal(true);
                            }}>
                                {updateImage[updateImageNum]==""?
                                    <div className="spm-add-img"><AddIcon/></div>:
                                    <img src={updateImage[updateImageNum]} />
                                }
                        </div>
                        <div className="spm-add-arrow-box">
                            <img
                                src={leftArrow}
                                onClick={()=>{
                                    if (updateImageNum != 0) setUpdateImageNum(updateImageNum-1);
                                    else setUpdateImageNum(4);
                                }}/>
                            <img
                                src={rightArrow}
                                onClick={()=>{
                                    if (updateImageNum != 4) setUpdateImageNum(updateImageNum+1);
                                    else setUpdateImageNum(0);
                                }}
                                style={{ float: "right", }}/>
                            <div className="spm-add-arrow-num">{updateImageNum+1}/5</div>
                        </div>
                        <div>
                            <div style={{ display: "flex"}}>
                                <input
                                    id="spm-update-name"
                                    className="spm-add-main-title spm-add-title"
                                    placeholder="상품명"
                                    onChange={handleAddName}
                                />
                                <div id="spm-none-1" className="spmcard-update-input-right">x</div>
                                <div id="spm-none-1" className="spmcard-update-input-right">x</div>
                            </div>
                            <div className="spmcard-update-input spmcard-update-input-top">
                                <div id="spm-none-1" className="spmcard-update-input-left">
                                    <DragCBtn className="spmcard-update-input-left-icon"/>
                                </div>
                                <div style={{ width: "100%", }}>
                                    <input
                                        id="spm-none-1"
                                        className="spmcard-update-input-text"
                                        type="text"
                                    />
                                </div>
                                <input
                                    id="spm-update-price"
                                    className="spmcard-update-input-price"
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                />원
                                <div id="spm-none-1" className="spmcard-update-input-right">x</div>
                            </div>
                            <>
                                {updateData.list.map((option: { optionId: any, optionName: any, optionList: any, optionDirect: any, optionDirectText: any, optionImage: any, })=>{
                                    return (
                                        <form className="spmcard-update">
                                            <div className="spmcard-option-update">
                                                <input
                                                    id={"spm-update-option-"+option.optionId}
                                                    className="spm-add-title spm-add-subtitle"
                                                    placeholder={"옵션"+option.optionId+" 이름"}
                                                    // value={option.optionName}
                                                    onChange={(e)=> {handleOptionName(e, option.optionId)}}
                                                />
                                                <div
                                                    id={"spm-none-"+option.optionId}
                                                    className="spm-add-right"
                                                    onClick={()=>{
                                                        for (var i = option.optionId-1; i < updateData.list.length-1; i++) {
                                                            updateData.list[i] = updateData.list[i+1];
                                                            updateData.list[i].optionId = i+1;
                                                        }
                                                        updateData.list.pop();
                                                        setNum(num+1);
                                                    }}>x
                                                </div>
                                            </div>

                                            {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, })=>{
                                                return (
                                                    <div className="spmcard-update-input">
                                                        <div
                                                            id={option.optionDirect&&option.optionList.length==optionList.optionListId? "spm-none-1": ""}
                                                            className="spmcard-update-input-left"
                                                            onDragStart={(e)=>{
                                                                setStartDrag(e.clientY);
                                                            }}
                                                            onDragEnd={(e)=>{
                                                                var n = Math.ceil((Math.abs(startDrag-e.clientY)-45)/45);
                                                                //Math.ceil() 올림 Math.floor() 내림, Math.abs() 절댓값
                                                                if (56 <= startDrag-e.clientY && n <= option.optionList.length
                                                                    && (optionList.optionListId-1 != 0)) {
                                
                                                                        for (var i=n+1; i>1; i--) {
                                                                            updateData.list[option.optionId-1].optionList[optionList.optionListId-i].optionListId = optionList.optionListId-(i-2);
                                                                        }
                                                                        updateData.list[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId-n;
                                                                        updateData.list[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                            if (a.optionListId < b.optionListId) return -1;
                                                                            if (a.optionListId > b.optionListId) return 1;
                                                                            return 0;
                                                                        });
                                                                }
                                                                else if (n <= option.optionList.length && startDrag-e.clientY <= -56 
                                                                    && ((optionList.optionListId != option.optionList.length && !option.optionDirect) 
                                                                    || (optionList.optionListId != option.optionList.length-1 && option.optionDirect))) {
                                
                                                                        for (var i=n; i>0; i--) {
                                                                            updateData.list[option.optionId-1].optionList[optionList.optionListId+(i-1)].optionListId = optionList.optionListId+(i-1);
                                                                        }
                                                                        updateData.list[option.optionId-1].optionList[optionList.optionListId-1].optionListId = optionList.optionListId+n;
                                                                        updateData.list[option.optionId-1].optionList.sort((a:any, b:any) => {
                                                                            if (a.optionListId < b.optionListId) return -1;
                                                                            if (a.optionListId > b.optionListId) return 1;
                                                                            return 0;
                                                                        });
                                                                }
                                                                setNum(num+1);
                                                            }}
                                                            draggable={true}>
                                                            <DragCBtn className="spmcard-update-input-left-icon"/>
                                                        </div>
                                                        <div style={{ width: "100%", }}>
                                                            <input
                                                                id={"spm-update-name-option-list-"+option.optionId+"-"+optionList.optionListId}
                                                                className="spmcard-update-input-text"
                                                                type="text"
                                                                name={"name"+optionList.optionListId}
                                                                placeholder={option.optionDirect&&option.optionList.length==optionList.optionListId? (option.optionImage? "이미지 입력": "텍스트 입력") : "품목"+optionList.optionListId+" 입력"}
                                                                value={option.optionDirect&&option.optionList.length==optionList.optionListId? option.optionDirectText: optionList.optionListName}
                                                                onChange={(e)=>{
                                                                    if (option.optionDirect&&option.optionList.length==optionList.optionListId)
                                                                        updateData.list[option.optionId-1].optionDirectText = e.target.value;
                                                                    else handleOptionListName(e, option.optionId, optionList.optionListId);
                                                                    setNum(num+1);
                                                                }}
                                                            />
                                                        </div>
                                                        <input
                                                            id={"spm-update-price-option-list-"+option.optionId+"-"+optionList.optionListId}
                                                            className="spmcard-update-input-price"
                                                            type="number"
                                                            min="0"
                                                            placeholder="0"
                                                            // value={optionList.optionListPrice}
                                                            onChange={(e)=>{handleOptionListPrice(e, option.optionId, optionList.optionListId)}}
                                                        />원
                                                        <div
                                                            id={"spm-none-"+optionList.optionListId}
                                                            className="spmcard-update-input-right"
                                                            onClick={()=>{
                                                                for (var i = optionList.optionListId-1; i < option.optionList.length-1; i++) {
                                                                    updateData.list[option.optionId-1].optionList[i] = updateData.list[option.optionId-1].optionList[i+1];
                                                                    updateData.list[option.optionId-1].optionList[i].optionListId = i+1;
                                                                }
                                                                updateData.list[option.optionId-1].optionList.pop();
                                                                if (!(option.optionDirect&&option.optionList.length==optionList.optionListId))
                                                                    updateData.list[option.optionId-1].optionDirect = false;
                                                                setNum(num+1);
                                                            }}>x
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            <div className="spmcard-update-input-button">
                                                <div
                                                    onClick={()=>{
                                                        updateData.list[option.optionId-1].optionList[option.optionList.length] = {
                                                            optionListId: option.optionList.length+1,
                                                            optionListName: "",
                                                            optionListPrice: 0,
                                                        };
                                                        setNum(num+1);
                                                    }}>+&nbsp;품목 추가
                                                </div>
                                                {option.optionDirect? null:
                                                    <>
                                                        <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                        <div
                                                            style={{ color: "#ea5450", }}
                                                            onClick={()=>{
                                                                updateData.list[option.optionId-1].optionList[option.optionList.length] = {
                                                                    optionListId: option.optionList.length+1,
                                                                    optionListName: "",
                                                                    optionListPrice: 0,
                                                                };
                                                                updateData.list[option.optionId-1].optionDirect = true;
                                                                updateData.list[option.optionId-1].optionImage = false;
                                                                setNum(num+1);
                                                            }}>'텍스트' 추가
                                                        </div>
                                                    </>
                                                }
                                                {option.optionDirect? null:
                                                    <>
                                                        <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                                                        <div
                                                            style={{ color: "#ea5450", }}
                                                            onClick={()=>{
                                                                updateData.list[option.optionId-1].optionList[option.optionList.length] = {
                                                                    optionListId: option.optionList.length+1,
                                                                    optionListName: "",
                                                                    optionListPrice: 0,
                                                                };
                                                                updateData.list[option.optionId-1].optionDirect = true;
                                                                updateData.list[option.optionId-1].optionImage = true;
                                                                setNum(num+1);
                                                            }}>'이미지' 추가
                                                        </div>
                                                    </>
                                                }
                                            </div>

                                        </form>
                                    );
                                })}
                                <hr className="spmcard-update-hr"/>
                                <button
                                    className="spmcard-update-button"
                                    onClick={()=>{
                                        updateData.list[updateData.list.length] = {
                                            optionId: updateData.list.length+1,
                                            optionName: "",
                                            optionList: [
                                                {
                                                    optionListId: 1,
                                                    optionListName: "",
                                                    optionListPrice: 0,
                                                },
                                            ],
                                            optionDirect: false,
                                            optionDirectText: "",
                                        };
                                        setNum(num+1);
                                    }}>
                                    + 옵션 추가
                                </button>
                            </>
                        </div>
                    </div>
                </div>

                <div className="pc spm-tap">
                    <button
                        onClick={()=>{
                            alert("닫기");
                            oriShow[idx] = true;
                            setNum(num+1);
                        }}>
                        <CloseBtn/>
                    </button>
                    {/* <button
                        onClick={()=>{
                            alert("복제");
                        }}>
                        <CopyBtn/>
                    </button> */}
                </div>
            </div>
            </>
    );   
}

export default SPM_Update;