import { useState } from "react";
import s from "./index.module.css";

const Spoiler = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openClass = isOpen ? s.open : "";

  return (
    <div className={s.spoiler}>
      <button
        className={`${s.spoiler_btn} ${openClass}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>

      <div className={`${s.spoiler_content} ${openClass}`}>{children}</div>
    </div>
  );
};

export default Spoiler;