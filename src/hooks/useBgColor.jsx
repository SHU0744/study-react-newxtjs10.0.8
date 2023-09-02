import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
export const useBgColor = () => {
  const router = useRouter();
  const Bgcolor = useMemo(() => {
    return router.pathname === "/" ? "red" : "blue";
  }, [router.pathname]);

  useEffect(() => {
    // console.log("マウント時");
    // console.log(count);
    document.body.style.backgroundColor = Bgcolor;
    return () => {
      // console.log("アンマウント時");
      // console.log(count);
      document.body.style.backgroundColor = "";
    };
  }, [Bgcolor]);
};
