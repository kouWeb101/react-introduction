/** reactを使う場合は必ず記述する */
import React from "react";
import ReactDom from "react-dom";
/** 別ファイルのコンポーネントを読み込む */
import { App } from "./App";

/** 第一引数にコンポーネント、第二引数にどの場所でレンダーするか */
ReactDom.render(<App />, document.getElementById("root"));
