import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getCardsThunk } from "../redux/modules/cardsSlice";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const CardList = () => {
  const dispatch = useDispatch();
  // const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  const { isLoading, error, cards } = useSelector((state) => {
    return state.cards;
  });

  useEffect(() => {
    dispatch(__getCardsThunk());
  }, []);

  // if (isLoading) {
  //   return <div>로딩중.....ㅎㅎ</div>;
  // }
  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  return (
    <StBackGroundImg>
      {/* 게임 등록하기 버튼 */}
      <FloatingButton
        onClick={() => {
          navigate("/game/submit");
        }}
      >
        게임 등록하기
      </FloatingButton>
      <div>
        {/* 카드리스트 여기서는 axios get으로 카드리스트(지금은dbjson)가져와서 거기다 맵으로 div에 뿌려준다 */}
      </div>
      {/* card 하나하나 및 카드 클릭시 Detail page로 이동*/}
      <BardList>
        {cards.map((card) => (
          <Card key={card.gameId}>
            <strong>{card.title} </strong>
            <div>
              <div>
                <div>
                  <strong>{card.optionA}</strong>
                </div>
                <div>----------------------------------------</div>
                <div>
                  <strong>{card.optionB}</strong>
                </div>
              </div>
              <p>{card.userId}</p>
            </div>
            <Link to={`/games/${card.gameId}`}>Go</Link>
          </Card>
        ))}
      </BardList>
    </StBackGroundImg>
  );
};
export default CardList;

const StBackGroundImg = styled.div`
  background-image: url("background/submit.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  background-position-y: 0;
`;
const BardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.li`
  /* width: 300px; */
  height: 200px;
  display: flex;
  gap: 30px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  p {
    width: 20%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const StCardList = styled.div`
  padding: 1% 10%;
  justify-content: center;
  align-items: center;
  width: 30.6%;
  height: 20%;
  background-color: #5753fd;
  border: 0.5px groove black;
  border-radius: 20px;
  color: white;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 1.3);
  &:hover {
    background-color: #ff83a1;
  }
`;
const StCardWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 1%;
  flex-wrap: wrap;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid transparent;
`;
const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* background-color: #007bff; */
  background-color: #000000;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  /* transform: rotate(45deg); */
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;
const StCardTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StCardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
