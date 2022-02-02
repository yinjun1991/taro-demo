import React, { useState } from "react";
import { Editor, View } from "@tarojs/components";

export default function Index() {
  const [deltaSet, setDeltaSet] = useState([]);

  const ele = React.createElement(Editor, {
    plugins: ["mention"],
    placeholder: "请输入富文本",
    autoHeight: true,
    // 没有写错，是 aditStyle，不是 editStyle
    aditStyle: {
      fontSize: "14px",
      lineHeight: "20px",
      // eslint-disable-next-line
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
      color: "#1F2329",
    },
    onInput: (res) => {
      console.log("==== detail", res.detail);
      const ds = res.detail.deltaSet.t["0"].ops;
      console.log("==== delta", ds);
      setDeltaSet(res.detail.deltaSet.t["0"]);
    },
    onBlur() {
      console.log("blur");
    },
  });

  const ele2 = React.createElement(Editor, {
    plugins: ["mention"],
    placeholder: "使用 deltaSet 同步",
    autoHeight: true,
    // 没有写错，是 aditStyle，不是 editStyle
    aditStyle: {
      fontSize: "14px",
      lineHeight: "20px",
      // eslint-disable-next-line
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
      color: "#1F2329",
    },
    readOnly: true,
    contents: {
      deltaSet,
    },
  });

  return (
    <View className="page">
      {ele}
      {ele2}
    </View>
  );
}
