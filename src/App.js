/* eslint  react-hooks/exhaustive-deps : off*/
import React, { useEffect, useState } from "react";
import { ColorMessage } from "./components/ColorMessage";
export const App = () => {
  console.log("最初");
  //stateの管理
  //第一引数に管理したい関数名 第二引数 更新する関数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setShowFlag(!faceShowFlag);
  };
  //レンダーと切り離して行いたい部分はuseEffectを使用する
  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setShowFlag(true);
    } else {
      faceShowFlag && setShowFlag(false);
    }
  }, [num]);
  return (
    /** reactでは異なるタグを複数表示したい場合
     * は親タグで囲まなければならない<div>で囲んでも問題ないが
     * その場合不必要なタグがレンダリングされてしまうでの<></>で囲むことで
     * レンダリングされずにすむ
     */
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <button onClick={onClickCountUp}>ボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(AAAA)</p>}
    </>
  );
};
