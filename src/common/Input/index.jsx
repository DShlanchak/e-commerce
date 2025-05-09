import s from './index.module.css';

const Input = ({ label, type = 'text', options, ...props }) => {
  const isCheckbox = type === 'checkbox';
  const isSelect = type === 'select';

  return (
    <div className={s.container}>
      {label && <span>{label}</span>}
      {isSelect ? (
        <select className={s.input} {...props}>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className={s.input}
          style={{
            border: isCheckbox ? 'none' : `1px solid #ccc`,
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
