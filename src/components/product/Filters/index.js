import { useLocation } from 'react-router-dom';
import { filterConfig } from './filterConfig';
import { useFilters } from '../../../hooks/useFilters';
import Input from '../../../common/Input';
import Spoiler from '../../../common/Spoiler';
import s from './index.module.css';

export default function Filters() {
  const location = useLocation();
  const { values, handleChange } = useFilters();

  return (
    <Spoiler title="Filter">
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.price}>
            <Input
              {...filterConfig.find(f => f.name === 'from')}
              value={values.from ?? ''}
              onChange={handleChange}
            />
            <Input
              {...filterConfig.find(f => f.name === 'to')}
              value={values.to ?? ''}
              onChange={handleChange}
            />
          </div>

          {filterConfig.map((config) => {
            const { name, type, hiddenOnSalePage } = config;

            if (name === 'from' || name === 'to') return null;
            if (hiddenOnSalePage && location.pathname === '/sale') return null;

            return (
                <Input
                  key={name}
                  {...config}
                  value={type !== 'checkbox' ? values[name] ?? '' : undefined}
                  checked={type === 'checkbox' ? values[name] ?? false : undefined}
                  onChange={handleChange}
                />
            );
          })}                 
        </div>
      </div>
    </Spoiler>
  );
}

//prop borderColor for cart page - green, for discount form (banner home page) - none or transparent