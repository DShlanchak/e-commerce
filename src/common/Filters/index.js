import Input from '../../common/Input';
import s from './index.module.css';
import Spoiler from '../../common/Spoiler';
import { useLocation } from 'react-router-dom';
import { useFilters } from '../../hooks/useFilters';

export default function Filters () {
  const location = useLocation();
  const { filters, sortBy, handleInputChange, handleDiscountChange, handleSortChange } = useFilters();

  return (
    <Spoiler title="Filter">
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.price}>
            <Input 
              type="text"
              placeholder="from"
              label="Price"
              name="from"
              value={filters.from}
              onChange={handleInputChange}
            />
            <Input 
              type="text"
              placeholder="to"
              name="to"
              value={filters.to}
              onChange={handleInputChange}
            />
          </div>

          {location.pathname !== '/sale' && (
            <Input 
              type="checkbox"
              label="Discounted items"
              checked={filters.discounted}
              onChange={handleDiscountChange}
            />
          )}

          <Input 
            type="text"
            placeholder="default"
            label="Sorted"
            value={sortBy}
            onChange={handleSortChange}
          />
        </div>
      </div>
    </Spoiler>
    
  )
}

//prop borderColor for cart page - green, for discount form (banner home page) - none or transparent
