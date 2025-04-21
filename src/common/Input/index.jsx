import { useState } from "react";
import s from './index.module.css';

const Input = ({ label, borderColor = "#ccc", ...props }) => {
  const [value, setValue] = useState("");

  return (
    <div className={s.container}>
      <label>{label}</label>
      <input
        className={s.input}
        style={{ border: `1px solid ${borderColor}` }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </div>
    
    
  );
};

export default Input;