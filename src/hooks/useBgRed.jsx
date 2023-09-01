import { useEffect } from "react";
export const useBgRed = ({ count }) => {
  useEffect(() => {
    // console.log("マウント時");
    // console.log(count);
    document.body.style.backgroundColor = "red";
    return () => {
      // console.log("アンマウント時");
      // console.log(count);
      document.body.style.backgroundColor = "";
    };
  }, [count]);
};
