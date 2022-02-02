import { Navigator, View } from "@tarojs/components";

import "./index.css";

export default function Index() {
  return (
    <View className="page">
      <Navigator key="editor" url="/pages/editor/index">
        editor
      </Navigator>
      <Navigator key="editor-atfinder" url="/pages/editor-atfinder/index">
        editor onAtfinder 或 onAtFinder 无效
      </Navigator>
      <Navigator key="label" url="/pages/label/index">
        label
      </Navigator>
    </View>
  );
}
