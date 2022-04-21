import { Navigator, View } from "@tarojs/components";

import "./index.css";

export default function Index() {
  return (
    <View className="page">
      <Navigator key="label" url="/pages/label/index">
        label
      </Navigator>
    </View>
  );
}
