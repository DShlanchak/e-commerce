import Input from '../../common/Input';
import s from './index.module.css';
import Spoiler from '../../common/Spoiler';
import { useLocation } from 'react-router-dom';

export default function Filters () {
  const location = useLocation();

  return (
    <Spoiler title="Filter">
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.price}>
            <Input type={'text'} placeholder='from' borderColor="green" label={'Price'}/>
            <Input type='text' placeholder='to'/>
          </div>

          {location.pathname !== '/sale' && (
            <Input type={'radio'} label={'Discounted items'} />
          )}

          <Input type={'text'} placeholder='default' label={'Sorted'}/>
        </div>
      </div>
    </Spoiler>
    
  )
}
