import React from "react";
import { Editor, View } from "@tarojs/components";

export default function Index() {
  const ele = React.createElement(Editor, {
    plugins: ["mention"],
    placeholder: "使用 deltaSet 同步",
    autoHeight: true,
    onAtfinder(ev) {
      console.log("==== onAtfinder", ev);
    },
    onAtFinder(ev) {
      console.log("==== onAtFinder", ev);
    },
    onatfinder(ev) {
      console.log("==== onatfinder", ev);
    },
    bindatfinder(ev) {
      console.log("==== bindatfinder", ev);
    },
  });

  return <View className="page">{ele}</View>;
}
