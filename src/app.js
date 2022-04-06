import { useEffect } from "react";
import Taro, { login } from "@tarojs/taro";

import "./app.css";

// Taro.onError((...args) => {
//   console.log("==== catch", ...args);
// });

window.addEventListener("error", (err) => {
  console.log("==== window error", err);
});

function error() {
  console.log("====>", abc3);
}

export default function App(props) {
  useEffect(() => {
    // 不会触发 onError
    error();

    // 延迟执行也不会触发 onError
    // setTimeout(error, 100);

    login({
      success(res) {
        // login 回调里的错误会触发 onError
        // error();
        // console.log("==== success", res);
      },
    });
  }, []);

  return props.children;
}
