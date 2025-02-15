import Input from '../../common/Input';
import s from './index.module.css';
import Spoiler from '../../common/Spoiler';

export default function Filters
() {
  return (
    <Spoiler title="Filter">
      <div className={s.container}>
        <div className={s.row}>
            <div className={s.price}>
                <Input type={'text'} placeholder='from' borderColor="green" label={'Price'}/>
                <Input type='text' placeholder='to'/>
            </div>
            <Input type={'radio' } label={'Discounted items'}/>
            <Input type={'text'} placeholder='default' label={'Sorted'}/>
        </div>
     </div>
    </Spoiler>
    
  )
}
