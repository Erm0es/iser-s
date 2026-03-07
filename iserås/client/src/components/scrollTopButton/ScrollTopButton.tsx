import { useEffect, useState } from "react";
import "./ScrollTopButton.css";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scrollTop ${visible ? "scrollTop--visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Till toppen"
    >
      ↑
    </button>
  );
}