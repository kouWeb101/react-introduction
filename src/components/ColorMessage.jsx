import React from "react";

/**
 * propsは親コンポーネントから渡される引数のこと
 * 変数名はなんでも構わないが、慣例的にpropsを使用する
 * @param {*} props
 */
export const ColorMessage = (props) => {
  /**
   * 分割代入でpropsをそれぞれの変数に分ける
   */
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
