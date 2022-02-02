import React, { useState } from "react";
import { View, Label, Button, Text } from "@tarojs/components";

export default function Index() {
  const [text, setText] = useState("");
  return (
    <View className="page">
      <View>for 和 htmlFor 属性都无效</View>
      <Label>
        这里是 label
        <Button
          onClick={() => {
            setText("按钮被点击了");
          }}
        >
          这里是按钮
        </Button>
      </Label>
      <Text>{text}</Text>
    </View>
  );
}
