import React from "react";
import { Editor } from "@tarojs/components";

export default function Index() {
  return React.createElement(Editor, {
    plugins: ["mention"],
    placeholder: "请输入富文本",
    placeholderStyle: {
      color: "#FF0000",
    },
  });
}
