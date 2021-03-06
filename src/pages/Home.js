import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
// import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import PangImage from "../assets/ggompang.jpeg";

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <>
      <Container>
        <Header>ð¼ ìë¹ì§ì¬ íë³ê¸° ð¼</Header>
        <Wrapper>
          <Title>ëìê² ë§ë ì£¼ì¸ëì?!</Title>
          <LogoImage>
            <img
              src={PangImage}
              alt="ì´í¡ì¬ì§"
              className="rounded-circle"
              width={350}
              height={350}
            />
          </LogoImage>
          <Desc>MBTIë¥¼ ê¸°ë°ì¼ë¡ íë ëë ìë§ë ê³ ìì´ ì°¾ê¸°!</Desc>
          <Desc>ë´ê° ì§ì¬ê° ëì ê³ ìì´ë¥¼ í¤ì´ë¤ë©´...?</Desc>
          {/* <LogoImage src={logo} /> */}
          <Button
            onClick={handleClickButton}
            className="btn-danger"
            style={{
              fontFamily: "SimKyungha",
              fontSize: 25,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            íì¤í¸ ììíê¸°
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: #fffacd;
  flex-direction: column;
`;

const Header = styled.div`
  color: white;
  font-size: 40pt;
  font-family: "SimKyungha";
  height: 10vh;
  width: 100%;
  background: #ffa07a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 30pt;
  font-family: "SimKyungha";
  font-weight: 550;
`;

const Desc = styled.div`
  font-size: 20pt;
  font-family: "SimKyungha";
  font-weight: 550;
`;
