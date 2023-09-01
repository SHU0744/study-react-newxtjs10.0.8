import { useCallback, useState } from "react";
export const useInputAdd = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const onChangeInput = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value);
  }, []);

  const onClickAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がありますので異なるものを入力");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);

  return { text, array, onChangeInput, onClickAdd };
};
