
const Cake_Detail_Static_TestData = () => {
    //get /api/cake/{cakeId}
    return ({
        cakeId: 0,
        name: "케이크1", 
        price: 25000, 
        likes: 10,
        likeStatus: true,
        todayCake: false,
        image1: "https://image.wconcept.co.kr/productimg/image/img0/52/300728752_VO48242.jpg",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        storeId: 0,
        storeName: 0,
        deadline: [3, 3, 3, 3, 3, 1, 1],
        optionsList: [
            {
                price: 2000,
                category: "SIZE",
                categoryTitle: "",
                contents: "1호",
                childsList: [
                    {
                        type: 1,
                        array: [0],
                    },
                    {
                        type: 2,
                        array: [0, 1],
                    },
                ],
                optionsId: 233,
                itemType: "normal",
                itemNumber: 0,
            },
            {
                price: 2000,
                category: "TASTE",
                categoryTitle: "",
                contents: "딸기",
                childsList: [],
                optionsId: 234,
                itemType: "normal",
                itemNumber: 0,
            },
            {
                price: 1000,
                category: "TASTE",
                categoryTitle: "",
                contents: "바나나",
                childsList: [],
                optionsId: 235,
                itemType: "text",
                itemNumber: 1,
            },
            {
                price: 0,
                category: "TASTE",
                categoryTitle: "(시트+크림)",
                contents: "초코",
                childsList: [],
                optionsId: 236,
                itemType: "normal",
                itemNumber: 0,
            },
            {
                price: 0,
                category: "TASTE",
                categoryTitle: "(시트+크림)",
                contents: "초코",
                childsList: [],
                optionsId: 237,
                itemType: "normal",
                itemNumber: 1,
            },
            {
                price: 0,
                category: "TASTE",
                categoryTitle: "(시트+크림)",
                contents: "초코",
                childsList: [],
                optionsId: 238,
                itemType: "image",
                itemNumber: 2,
            },
        ],
    });
}

export default Cake_Detail_Static_TestData;