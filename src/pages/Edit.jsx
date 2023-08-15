import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonRe } from "../components/Button";
import { __getCardsThunk } from "../redux/modules/cardsSlice";
import { Input } from "../components/Input";
//  등록하면 cardlist에 card 추가 되도록.

function Edit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [card, setCard] = useState({
    title: "",
    optionA: "",
    optionB: "",
  });
  // console.log("card =>", card)

  // const [title, setTitle] = useState("");
  // const [optionA, setOptionA] = useState("");
  // const [optionB, setOptionB] = useState("");

  // title 변경 감지하는 함수
  // const handleTitleChange = (e) => {
  //   setCard({ ...card, title: e.target.value });
  // };
  // //  gameA 변경 감지하는 함수
  // const handleGameAchange = (e) => {
  //   setCard({ ...card, optionA: e.target.value });
  // };
  // //  gameB 변경 감지하는 함수
  // const handleGameBchange = (e) => {
  //   setCard({ ...card, optionB: e.target.value });
  // };

  //위 Card input 요약 감지
  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setCard((old) => {
      return { ...old, [name]: value };
    });
  };

  //추가 함수
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__getCardsThunk(card));
    setCard({ title: "", optionA: "", optionB: "" });
  };
  console.log("dispatch-> ", dispatch);

  return (
    <StBackGroundImg>
      <div>
        <StCardContainer>
          <StTitleWrapper>CREATE A GAME</StTitleWrapper>

          <form onSubmit={onSubmitHandler}>
            <StInputWrap>
              <Input
                text="TITLE"
                type="text"
                name="title"
                placeholder="10자 내로 제목을 지어주세요."
                minLength="1"
                maxLength="10"
                value={card.title}
                onChange={changeInputHandler}
                required
              ></Input>
              <Input
                text="optionA"
                type="text"
                name="optionA"
                placeholder="옵션A를 기재해주세요."
                minLength="1"
                maxLength="25"
                value={card.optionA}
                onChange={changeInputHandler}
                required
              />
              <Input
                text="optionB"
                type="text"
                name="optionB"
                placeholder="B의견을 적어주세요(25자 이내)"
                minLength="1"
                maxLength="25"
                value={card.optionB}
                onChange={changeInputHandler}
                required
              />
            </StInputWrap>
          </form>
          <StButtonWrapper className="buttonWrap">
            <ButtonRe
              onClick={() => {
                navigate("/games");
              }}
            >
              CANCEL
            </ButtonRe>
            <br />
            <ButtonRe
              onClick={() => {
                dispatch(__getCardsThunk(card));
                setCard({ title: "", optionA: "", optionB: "" });
              }}
            >
              CREATE
            </ButtonRe>
          </StButtonWrapper>
        </StCardContainer>
      </div>
    </StBackGroundImg>
  );
}

export default Edit;
const StCardContainer = styled.div`
  font-family: "Montserrat";
  border: 2px hidden lightgray;
  border-radius: 30px;
  background-color: #12d8b4;
  width: 50vw;
  height: 60vh;
  margin: 0 auto;
`;
const StTitleWrapper = styled.h1`
  font-size: 52px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StBackGroundImg = styled.div`
  background-image: url("background/cardlist.png");
  /* background-size: cover; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StInputWrap = styled.div`
  margin: 0 auto 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const StButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
// const InputArea = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   width: 100%;
// `;
