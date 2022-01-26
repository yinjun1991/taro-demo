import React, { Component } from "react";
import { Editor } from "@tarojs/components";

export default class Index extends Component {
  render() {
    return React.createElement(Editor, {
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
      onInput: () => {
        console.log("input");
      },
    });
  }
}
