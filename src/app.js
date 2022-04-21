import { useEffect } from "react";
import { login, setStorageSync, checkSession } from "@tarojs/taro";

import "./app.css";

export default function App(props) {
  useEffect(() => {
    // login({
    //   success(res) {
    //     setStorageSync("login_code", res.code);
    //     // console.log("==== code", res.code);
    //     // login 回调里的错误会触发 onError
    //     // error();
    //     // console.log("==== success", res);
    //   },
    // });
  }, []);

  return props.children;
}
