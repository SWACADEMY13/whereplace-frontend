import "./Join.css";
import React, { useState } from 'react';

function Join() {

    // 회원가입 정보 저장 useState
    const [joinData, setJoinData] = useState({
        name: "",
        phone: "",
        email: "",
        pw: "",
        nickname: "",
    });


    // 회원가입 버튼 시 실행 함수
    const signUpBtn = () => {
        fetch('url 경로 입력', {
            method: "POST",
            headers: {
                "Content-Type": "applicaation/json",
            },
            body: JSON.stringify({
                name: joinData.name,
                phone: joinData.phone,
                email: joinData.email,
                pw: joinData.pw,
                nickname: joinData.nickname,
                
            }),
        }).then(res => res.json()).then(res => {
            console.log(res);
            if (res.value) {
                alert("회원가입 완료. 로그인 페이지로 이동합니다.");
                document.location.href = "/Login";
            } else {
                alert("회원가입에 실패하였습니다. 다시 시도해 주세요.");
            }
        });
    }

    // input 태그에 입력한 데이터들 useState 저장
    const onChangeJoin = (e) => {
        console.log("e ", e);
        setJoinData({
            ...joinData,
            [e.target.id]: e.target.value,
        });

        console.log(joinData);
    }



    return (

        <div>
            <link rel="stylesheet" href="./css/screen.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Long+Cang&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet" />

            <header class="join_header">
                <div class="join_header_logo">
                    <a href="/">
                        <h1>W H E R E &nbsp; P L A C E</h1>
                    </a>
                </div>
            </header>



            <main class="join_main_box">
                <div class="join_background_img">

                    <div class="join_overlay">
                    </div>
                </div>
                <section class="join_login_box">
                    {/* <!-- @@ 경로 수정해야함 @@ --> */}
                    <div>
                        <input id="name" placeholder="NAME" name="name" onChange={onChangeJoin}></input>
                        <input id="phone" placeholder="PHONE" name="phone" onChange={onChangeJoin}></input>
                        <input id="email" placeholder="E-MAIL" name="email" onChange={onChangeJoin}></input>
                        <input type="password" id="pw" placeholder="PASSWORD" name="pw" onChange={onChangeJoin}></input>
                        <input id="nickname" placeholder="NICKNAME" name="nickname" onChange={onChangeJoin}></input>
                       
                       
                        <button class="sign_up_btn" onClick={signUpBtn}>회원가입</button>
                    </div>
                </section>
            </main>

        </div>
    );




};
export default Join;
