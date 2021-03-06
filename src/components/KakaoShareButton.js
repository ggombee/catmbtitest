import React from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShareButton = ({ data }) => {
  const url = "https://betatestmbti.netlify.app/";
  const resultUrl = window.location.href;

  React.useEffect(() => {
    Kakao.init("706b058dedece1187fba96396b9d2738");
  }, []);

  const shareKakao = () => {
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "๐ผ์๋น์ง์ฌ ํ๋ณ๊ธฐ ๊ฒฐ๊ณผ๐ผ",
        description: `์๋น ์ง์ฌ๋์ด ๊ณ ์์ด๋ฅผ ํค์ด๋ค๋ฉด ๊ฐ์ฅ ์๋ง๋ ๊ณ ์์ด๋ ${data.name}์๋๋ค.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "๋๋ ํ์คํธํ๋ฌ๊ฐ๊ธฐ",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button
      onClick={shareKakao}
      // className="btn-primary"
      // className="btn-secondary"
      // className="btn-success"
      className="btn-warning"
      // className="btn-info"
      // className="btn-light"
      // className="btn-dark"
      style={{
        width: 170,
        fontFamily: "SimKyungha",
        fontSize: 25,
        marginTop: 20,
        marginLeft: 20,
        color: "white",
      }}
    >
      ์นด์นด์คํก ๊ณต์ ํ๊ธฐ
    </Button>
  );
};

export default KakaoShareButton;
