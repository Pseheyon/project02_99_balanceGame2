import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { __login } from "../redux/modules/login";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import {
  ButtonRe,
  ButtonStyleJoin,
  ButtonStyleLogin,
} from "../components/Button";
import { FlexRowCenter } from "../components/Flex";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nickname: "",
    password: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    event.preventDefault();

    setUser((old) => {
      return { ...old, [name]: value };
    });
  };
  const token = localStorage.getItem("token");
  const isLoggedIn = token ? true : false;

  const submitButtonHandler = async (event) => {
    event.preventDefault();
    dispatch(__login(user));
    navigate("/games");
  };
  // function handleLogout() {
  //   dispatch(__logout(user));
  // }
  const handleLogoutBtn = () => {
    // 로컬 스토리지에서 "토큰"이라는 이름의 값을 삭제
    localStorage.removeItem("token");
    // 로그아웃 로직 추가
    // ...
  };
  //가드;
  // useEffect(() => {
  //   if (token) {
  //     navi("/");
  //   }
  // }, []);

  //useEffect는 마운트될때 한번만 실행되고 그 후에 실행되지 않음
  //새로고침하면 실행됨

  return (
    // <div className='Homebackground'style={{ backgroundImage: `url(${"process.env.PUBLIC_URL/public/Login.png"})`}}>
    <>
      <StBackGroundImg>
        LOGIN
        <SignupBox onSubmit={submitButtonHandler}>
          <StInputWrap>
            <Input
              text="ID"
              type="text"
              value={user.nickname}
              name="nickname"
              onChange={changeInputHandler}
              placeholder="아이디를 입력해주세요"
              required
            />
            <Input
              text={"PW"}
              type="password"
              value={user.password}
              name="password"
              onChange={changeInputHandler}
              placeholder="비밀번호를 입력해주세요"
              required
            />
          </StInputWrap>
          <FlexRowCenter>
            {isLoggedIn ? (
              <ButtonRe onClick={handleLogoutBtn}>LOGOUT</ButtonRe>
            ) : (
              <>
                <ButtonStyleJoin
                  onClick={() => {
                    navigate("/");
                  }}
                  buttonStyle={buttonStyle}
                >
                  Join
                </ButtonStyleJoin>
                <ButtonStyleLogin
                  onClick={() => {
                    navigate("/login");
                  }}
                  buttonStyle={buttonStyle}
                >
                  Login
                </ButtonStyleLogin>
              </>
            )}
          </FlexRowCenter>
        </SignupBox>
      </StBackGroundImg>
    </>
  );
}
export default Login;

const StBackGroundImg = styled.div`
  font-family: "Montserrat";
  background-image: url("background/Login.png");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  font-size: 52px;
  font-weight: 900;
`;

const SignupBox = styled.form`
  width: 420px;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 80px;
  height: 38vh;
  padding: 20% auto;
  box-sizing: border-box;
`;
const StInputWrap = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const buttonStyle = {
  height: "55px",
  fontSize: "20px",
};
