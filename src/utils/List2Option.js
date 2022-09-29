import React, { useState, useEffect } from "react";
import axios from "axios";
import $, { get } from "jquery";

const List2Option = (getData) => {
    const category = {
        "SIZE": "사이즈",
        "TASTE": "맛",
        "COLOR": "색상",
        "DESIGN": "디자인",
        "SIDE_DECO": "사이드데코",
        "DECO": "데코",
        "LOWER_LETTERING": "레터링",
        "FONT": "글씨체",
        "WRITE_SIZE": "글씨크기",
        "PHOTO": "사진",
        "PACKAGE": "포장",
        "CANDLE": "초",
        "ETC": "기타",
    };

    var chOptionList = [];
    // var chOptionListTF = []; //
    // for (var i=0; i<13; i++) chOptionListTF[i] = true; //
    
    var j = -1;
    for (var i=0; i<getData.length; i++) {
        var c = category[getData[i].category];
        // var c = category[getData[i].category].split("&")[0];
        // var oid = category[getData[i].category].split("&")[1]; //

        if (getData[i].itemNumber === 0) {
        // if (chOptionListTF[oid]) { //
            chOptionList.push({
                optionId: true,
                optionNumber: chOptionList.length,
                optionName: c+getData[i].categoryTitle,
                itemList: [{
                    itemId: getData[i].optionsId,
                    itemNumber: 0,
                    itemType: getData[i].itemType,
                    itemName: getData[i].contents,
                    itemPrice: getData[i].additionalCost,
                    itemChild: getData[i].childOptionsList,
                }],
            });
            // chOptionListTF[oid] = false; //
            j++;
        }
        else {
            chOptionList[j].itemList.push({
                itemId: getData[i].optionsId,
                itemNumber: chOptionList[j].itemList.length,
                itemType: getData[i].itemType,
                itemName: getData[i].contents,
                itemPrice: getData[i].additionalCost,
                itemChild: getData[i].childOptionsList,
            })
        }
    }
    return chOptionList;
};

export default List2Option;
