import { useState, useEffect } from "react";
import classNames from 'classnames';
import axios from 'axios';
import $ from 'jquery';
import "src/styles/main/card/cake-store/SelectWindow.scss";

import X from "src/assets/x.svg";

interface Props {
  cakestoreTF: any,
  width: any,
  height: any,
  NumF: any,

  selectAll: any,
  selectBox: any,
  selectWindow: any,

  selectDataOne: any,
  selectData: any,

  setSelectMobileTF: any,
  SelectCloseF: any,
  setSelectAllF: any,
}

export default function SelectWindow({ 
        cakestoreTF, width, height, NumF,
        selectAll, selectBox, selectWindow,
        selectDataOne, selectData,
        setSelectMobileTF, SelectCloseF, setSelectAllF,
    }: Props) {

    //선택지창
    const SelectF = (n: number, str: string, length: number) => {
        if (SelectBarF(str))
        selectAll[selectAll.length] = str;
        selectWindow[n-1] = [false, str, length];
        NumF();
    };

    //선택지바
    const SelectBarF = (str: string) => {
        for (var i = 0; i < selectAll.length; i++) {
        if (selectAll[i] == str) return false;
        }
        return true;
    };

    const LocationF = (i: any, ) => {
        axios
            .get(`https://prod.kcook-cake.com/app/locations/`+i)
            .then(res =>{
                selectData[1] = res.data.result;
                NumF();
            });
    };

    return (
        <>
        <div className="cake-select-mobile-flex">
            <div className="mobile cake-select-mobile-top">
                <div style={{ marginLeft: "30px", }}></div>
                <div>상세검색</div>
                <div
                    onClick={()=>{setSelectMobileTF(false)}}>
                    <img src={X} />
                </div>
            </div>

            <div className={classNames('mobile', 'cake-select-mobile', {
                    "store-nouse": selectBox[0],
                })}>
                지역
                <div
                    className="cake-select-mobile-button"
                    onClick={()=>{
                        SelectCloseF();
                        if (!cakestoreTF) {
                            selectBox[1] = true;
                            if (!selectBox[2]) setSelectAllF([]);
                            selectBox[0] = false;
                            selectBox[2] = true;
                        }
                        if (selectWindow[1][0]) selectWindow[1][0] = false;
                        else selectWindow[1][0] = true;
                        NumF();
                    }}>
                    선택하기
                </div>
            </div>
            {selectWindow[1][0]?
            <div
                className="cake-select-absolute"
                style={{ top: height, left: (width-45+selectWindow[1][2]), }}>
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul" style={{ height: (52.2)*selectData[0].length, }}>
                    {selectData[0].map((data: { cityId: any, cityName: any, }, idx: any, )=>{
                        return (
                            <li
                                className={classNames("cake-select-li", {
                                    "cake-select-li-top": idx == 0,
                                    "cake-select-li-bottom": idx == selectData[0].length-1,
                                })}
                                onClick={()=>{
                                    SelectF(2, data.cityName, 8*data.cityName.length);
                                    if(!cakestoreTF) {
                                        selectWindow[2] = [false, "시/군", 8];
                                        LocationF(data.cityId);
                                    };
                                }}>
                                {data.cityName}
                            </li>
                        )
                        })
                    }
                </ul>
            </div>: null}

            {cakestoreTF || selectBox[1] ?
                <div className="mobile cake-select-mobile">
                    {cakestoreTF? "맛" : "시/군"}
                    <div
                        className="cake-select-mobile-button"
                        onClick={()=>{
                        SelectCloseF();
                        if (selectWindow[2][0]) selectWindow[2][0] = false;
                        else selectWindow[2][0] = true;
                        }}>
                        선택하기
                    </div>
                </div>
            :null}
            {selectWindow[2][0]?
            <div
                className="cake-select-absolute"
                style={{ top: height, left: (width+15+selectWindow[1][2]+selectWindow[2][2]), }}>
                {!cakestoreTF && selectData[1].length == 1?
                    null:
                    <>
                        <div className="cake-select-top"></div>
                        <ul className="cake-select-ul" style={{ height: (52.2)*selectData[1].length, }}>
                            {cakestoreTF?
                                <>
                                    {selectData[1].map((data: any, idx: any, )=>{
                                        return (
                                            <li
                                                className={classNames("cake-select-li", {
                                                    "cake-select-li-top": idx == 0,
                                                    "cake-select-li-bottom": idx == selectData[1].length-1,
                                                })}
                                                onClick={()=>{SelectF(3, data, 8*data.length);}}>
                                                {data}
                                            </li>
                                        )
                                        })
                                    }
                                </>:
                                <>
                                    {selectData[1].map((data: { locationId: any, locationName: any, }, idx: any, )=>{
                                        return (
                                            <li
                                                className={classNames("cake-select-li", {
                                                    "cake-select-li-top": idx == 0,
                                                    "cake-select-li-bottom": idx == selectData[1].length-1,
                                                })}
                                                onClick={()=>{SelectF(3, data.locationName, 8*data.locationName.length);}}>
                                                {data.locationName}
                                            </li>
                                        )
                                        })
                                    }
                                </>
                            }
                        </ul>
                    </>
                }
            </div>: null}

            <div className={classNames('mobile', 'cake-select-mobile', {
                    "store-nouse": selectBox[2],
                })}>
                {cakestoreTF? "이벤트" : "지하철"}
                <div
                    className="cake-select-mobile-button"
                    onClick={()=>{
                        SelectCloseF();
                        if (!cakestoreTF) {
                            selectBox[1] = false;
                            if (!selectBox[0]) setSelectAllF([]);
                            selectBox[0] = true;
                            selectBox[2] = false;
                        }
                        if (selectWindow[3][0]) selectWindow[3][0] = false;
                        else selectWindow[3][0] = true;
                        NumF();
                    }}>
                    선택하기
                </div>
            </div>
            {selectWindow[3][0]?
            <div
                className="cake-select-absolute"
                style={{ top: height, left: cakestoreTF? (width+95+selectWindow[1][2]+selectWindow[2][2]+selectWindow[3][2]): (width+35+selectWindow[1][2]+selectWindow[3][2]) }}>
                <div className="cake-select-top"></div>
                <ul className="cake-select-ul" style={{ height: (52.2)*selectData[2].length, }}>
                    {selectData[2].map((data: any, idx: any, )=>{
                        return (
                            <li
                                className={classNames("cake-select-li", {
                                    "cake-select-li-top": idx == 0,
                                    "cake-select-li-bottom": idx == selectData[2].length-1,
                                })}
                                onClick={()=>{SelectF(4, data, 8*data.length);}}>
                                {data}
                            </li>
                        )
                        })
                    }
                </ul>
            </div>: null}

            {selectWindow[4][1] == ""? null:
            <>
                <div className="mobile cake-select-mobile">
                    가격대
                    <div
                        className="cake-select-mobile-button"
                        onClick={()=>{
                        SelectCloseF();
                        if (selectWindow[4][0]) selectWindow[4][0] = false;
                        else selectWindow[4][0] = true;
                        }}>
                        선택하기
                    </div>
                </div>
                {selectWindow[4][0]?
                <div
                    className="cake-select-absolute"
                    style={{ top: height, left: (width+175+selectWindow[1][2]+selectWindow[2][2]+selectWindow[3][2]+selectWindow[4][2]), }}>
                    <div className="cake-select-top"></div>
                    <ul className="cake-select-ul" style={{ height: (52.2)*selectData[2].length, }}>
                        {selectData[3].map((data: any, idx: any, )=>{
                            return (
                                <li
                                    className={classNames("cake-select-li", {
                                        "cake-select-li-top": idx == 0,
                                        "cake-select-li-bottom": idx == selectData[3].length-1,
                                    })}
                                    onClick={()=>{SelectF(5, data, 8*data.length);}}>
                                    {data}
                                </li>
                            )
                            })
                        }
                    </ul>
                </div>: null}
            </>
            }
        </div>
        </>
    );
}
