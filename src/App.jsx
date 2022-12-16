/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // console.log("App Start");
  const [num, setNum] = useState(0); // States　ステート
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    // 処理の関心を分離　　※再レンダリング対策
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]); // numを監視

  return (
    // 画面のレンダリング
    //JSX記法 一つのタグで囲む必要がある
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichShowFlag}>ON / Off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
