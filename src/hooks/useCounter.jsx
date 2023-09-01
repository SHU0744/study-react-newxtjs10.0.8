import { useCallback, useState } from "react";
export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);
  const onClickShow = useCallback(() => {
    setIsShow((previsShow) => !previsShow);
  }, []);

  return { count, isShow, handleClick, onClickShow };
};
