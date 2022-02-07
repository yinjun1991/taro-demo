import { Navigator, View } from "@tarojs/components";

import "./index.css";

export default function Index() {
  return (
    <View className="page">
      <Navigator key="editor" url="/pages/editor/index">
        editor
      </Navigator>
      <Navigator key="editor-panel" url="/pages/editor-panel/index">
        editor 设置 height，选人面板 overflow
      </Navigator>
      <Navigator key="label" url="/pages/label/index">
        label
      </Navigator>
    </View>
  );
}
