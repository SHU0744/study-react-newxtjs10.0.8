import { useCallback, useMemo, useState } from "react";
export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);
  const onClickShow = useCallback(() => {
    setIsShow((previsShow) => !previsShow);
  }, []);

  return { count, doubleCount, isShow, handleClick, onClickShow };
};
