import { Component } from "react";
import { login } from "@tarojs/taro";

import "./app.css";

class App extends Component {
  componentDidMount() {
    login({
      success(res) {
        console.log("==== success", res);
      },
    });
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
