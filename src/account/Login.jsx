import "./Login.css";
// import SignUp from "./SignUp";
import React, { useState } from 'react';


function Login() {

    // const [ id , setId ] = useState("");
    // const [ pw , setPw] = useState("");

    const [loginResult, setLoginResult] = useState("");
    const [account, setAccount] = useState({
        id: "",
        pw: "",
    });
    //세션 선언 ( id 저장을 위한 값 )
    let sessionStorage = window.sessionStorage;

    //회원가입 버튼 회원가입 이동 함수
    const signUp = () => {
        document.location.href = "/Join";
    }



    //로그인 버튼 ( Rest API 호출 함수) 
    const login = () => {
        fetch('url 경로 입력', {
            method: "POST",
            headers: {
                "Content-Type": "applicaation/json",
            },
            body: JSON.stringify({
                id: account.id,
                pw: account.pw
            }),
        }).then(res => res.json()).then(res => {
            console.log(res);
            if (res.value) {
                setAccount(true);
                sessionStorage.setItem("id", account.id);
                console.log("session value : ", sessionStorage.getItem("id"));
                document.location.href = "/";
            } else {
                setAccount(false);
            }
        });

    }

    // id , pw 입력 시 useState 값 저장 함수
    const onChangeAccount = (e) => {
        console.log("e ", e);
        setAccount({
            ...account,
            [e.target.id]: e.target.value,
        });
    }


    return (

        <div>
            <link rel="stylesheet" href="./css/screen.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Long+Cang&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet" />


            <header class="header">
                <div class="header_logo">
                    <a href="/">
                        <h1>W H E R E &nbsp; P L A C E</h1>
                    </a>
                </div>
            </header>


            <main class="main_box">

                <div class="background_img">
                    {/* <img src="./imgage/fsdfdsdsfsfd.jpg" /> */}
                    <div class="overlay">

                    </div>
                </div>
                    <section class="login_box" >

                        <div>
                            <input id="id" placeholder="id" name="id" onChange={onChangeAccount} />
                            <input type="password" id="pw" placeholder="pw" name="pw" onChange={onChangeAccount} />
                            {loginResult === false ? <span class="alert">입력한 정보가 올바르지 않습니다.</span> : <span></span>}
                            <div class="btn_box">
                                <button class="login_btn" onClick={login} >로그인</button>
                                <button class="sign_up_btn" onClick={signUp}>회원가입</button>
                            </div>
                        </div>
                        <div class="social_api"></div>

                    </section>

                
            </main>

        </div>
    );



}
export default Login;