import React from "react";
import { Editor, View } from "@tarojs/components";

export default function Index() {
  const ele = React.createElement(Editor, {
    plugins: ["mention"],
    placeholder: "使用 deltaSet 同步",
    autoHeight: false,
    style: {
      height: 50,
    },
  });

  return <View className="page">{ele}</View>;
}
