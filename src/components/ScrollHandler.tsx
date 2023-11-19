import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//@ts-ignore
export default function ScrollHandler({ children }) {
  const { pathname, hash } = useLocation();

  const handleScroll = () => {
    const element = document.getElementById(hash.replace("#", ""));

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  };

  useEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash]);

  return children;
}
