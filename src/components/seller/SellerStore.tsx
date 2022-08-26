import React, { useState, useEffect } from 'react';
import '../../styles/mypage/Profile.scss';
import '../../styles/seller/SellerStore.scss';
import { ReactComponent as AddIcon } from '../../assets/seller/add-icon.svg';
import LinkClick from 'src/utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import isSession from 'src/utils/isSession';

function SellerStore (){
    const [failModalText, setFailModalText] = useState("수정 정보가 일치하지 않습니다.");
    const [failModal, setFailModal] = useState(false);

    //로그인 여부
    const [session, setSession] = useState(false);
    const [auth, setAuth] = useState({
        accountId: 0,
        address: "",
        dateOfBirth: "",
        email: "",
        nickname: "",
        phoneNumber: "",
    });

    const [email, setEmail] = useState("");
    const [pastPw, setPastPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [checkPw, setCheckPw] = useState("");
    const [nickname, setNickname] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [emailFail, setEmailFail] = useState(true);
    const [pastPwFail, setPastPwFail] = useState(true);
    const [newPwFail, setNewPwFail] = useState(true);
    const [checkPwFail, setCheckPwFail] = useState(false);
    const [nicknameFail, setNicknameFail] = useState(true);
    const [phoneFail, setPhoneFail] = useState(true);
  
    const handleEmail = (e: any,) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        setEmail(e.target.value);
        if (e.target.value.length >= 3 && e.target.value.length <= 20 && emailRegex.test(e.target.value))
            setEmailFail(false)
        else
            setEmailFail(true)
    };
    const handlePastPw = (e: any,) => {
        setPastPw(e.target.value);
        if (e.target.value.length >= 8)
            setPastPwFail(false)
        else
            setPastPwFail(true)
    };
    const handleNewPw = (e: any,) => {
        setNewPw(e.target.value);
        if (e.target.value.length >= 8)
            setNewPwFail(false)
        else
            setNewPwFail(true)
      };
    const handleCheckPw = (e: any,) => {
        setCheckPw(e.target.value);
        if (e.target.value === checkPw)
            setCheckPwFail(false)
        else
            setCheckPwFail(true)
    };
  
    const handleNickname = (e: any,) => {
        const nekRegex = /[^a-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
        setNickname(e.target.value);
        if (e.target.value.length >= 3 && e.target.value.length <= 20 && !nekRegex.test(e.target.value))
            setNicknameFail(false)
        else
            setNicknameFail(true)
    };
    const handleAddress = (e: any,) => {
        setAddress(e.target.value);
    };
    const handlePhone = (e: any) => {
        setPhone(e.target.value.replace("-", ""));
        if (e.target.value.length !== 0)
            setPhoneFail(false)
        else
            setPhoneFail(true)
    };

    const ChangeStore = () => {
        if (emailFail || pastPwFail || newPwFail || checkPwFail || 
            newPw != checkPw || nicknameFail || phoneFail) {
            setFailModal(true);
            setTimeout(() => {
              setFailModal(false);
            }, 5000);
        } else {
            //axios
        }
    };

    useEffect(() => {
        LinkClick("SellerStore");
        sellerLinkClick("SellerStore");

        var jwToken = undefined;
        if (sessionStorage.jwToken === undefined) jwToken = localStorage.jwToken;
        else jwToken = sessionStorage.jwToken;
        isSession(
            jwToken,
            (s: any, ) => {
                if (s) setSession(s);
            },
            (a: any, ) => {
                setAuth(a);
                setEmail(a.email); setEmailFail(false);
                setNickname(a.nickname); setNicknameFail(false);
                setAddress(a.address);
                setPhone(a.phoneNumber); setPhoneFail(false);
            }
        );
    },[]);
    return(
        <div className="seller-block">
            <div className="seller-store">
                <div className="seller-mypage-ss-mp seller-store-top">
                    <h3>스토어 정보</h3>
                </div>
                <div className="profile-list">
                    <button className="store-img-add">
                        <AddIcon/>
                    </button>
                </div>
                <div className="profile-list">
                    <p className="profile-name">아이디</p>
                    <input 
                        value={email}
                        className="profile-content"
                        onChange={handleEmail}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">비밀번호</p>
                    <div className="password-set">
                        <input
                            placeholder="기존 비밀번호 입력"
                            className="profile-content"/>
                        <input
                            placeholder="변경할 비밀번호 입력"
                            className="profile-content"/>
                        <input
                            placeholder="비밀번호 확인"
                            className="profile-content"/>
                    </div>
                </div>
                <div className="profile-list">
                    <p className="profile-name">이름(별명)</p>
                    <input 
                        value={nickname}
                        className="profile-content"
                        onChange={handleNickname}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">주소</p>
                    <input
                        value={address}
                        className="profile-content"
                        onChange={handleAddress}/>
                </div>
                <div className="profile-list">
                    <p className="profile-name">연락처</p>
                    <input
                        value={phone}
                        className="profile-content"
                        onChange={handlePhone}/>
                </div>
                <button
                    className="correction-btn"
                    onClick={ChangeStore}>
                    수정
                </button>

                {failModal? 
                    <div className="login-iscorrect">
                        {failModalText}
                    </div>
                : null}
            </div>
        </div>
            
    
    )
}


export default SellerStore;