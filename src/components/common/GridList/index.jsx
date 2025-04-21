import s from './index.module.css';

export default function GridList({ children, className = '' }) {
    return (
      <ul className={`${s.gridList} ${className}`}>
        {children}
      </ul>
    );
  }
  