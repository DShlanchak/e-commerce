import React, { useState } from 'react'
import s from './index.module.css';

export default function Footer() {

  const [openBlock, setOpenBlock] = useState(null); 

  const toogleContent = (blockName) => {
    setOpenBlock(openBlock === blockName ? null : blockName);
  };

  return (
<footer>
<div className={s.wrapper}>
  <div className={s.block}>

    <div className={s.block_item}>
      <div className={s.block_title} onClick={() => toogleContent('contact')}>
        Contact
      </div>
      <div className={`${s.block_content} ${openBlock === 'contact' ? s.open : ''}`}>
        <p className={s.content_text}>Tel: +49 999 999 99 99</p>
        <div className={s.content_icons}>
          Lorem ipsum dolor
        </div>
      </div>
    </div>

    <div className={s.block_item}>
      <div className={s.block_title} onClick={() => toogleContent('address')}>
        Address
      </div>
      <div className={`${s.block_content} ${openBlock === 'address' ? s.open : ''}`}>
       <div className={s.content_text}>
        <p>Linkstraße 2 <br/> 10785 Berlin <br/> Deutschland</p>
        <p>Working Hours:<br/><b>24 hours a day</b></p>
       </div>
      </div>
    </div>

    <div className={s.block_item}>
      <div className={s.block_title} onClick={() => toogleContent('map')}>
        Map
      </div>
      <div className={`${s.block_content} ${openBlock === 'map' ? s.open : ''}`}>
        <div className={s.content_img}>
          <iframe 
            frameBorder='no' 
            width="100%" 
            height="525" 
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Linkstra%C3%9Fe%202%20Berlin+(telranDE)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
            title="Map">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</div>
</footer>
  )
}

