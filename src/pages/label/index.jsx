import React, { useState } from "react";
import { View, Label, Button, Text } from "@tarojs/components";

export default function Index() {
  const [text, setText] = useState("");
  return (
    <View>
      <Label for="elementId" htmlFor="elementId">
        这里是 label
      </Label>
      <Button
        id="elementId"
        onClick={() => {
          setText("按钮被点击了");
        }}
      >
        这里是按钮
      </Button>
      <Text>{text}</Text>
    </View>
  );
}
