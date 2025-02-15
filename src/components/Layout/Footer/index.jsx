import React, { useState } from 'react'
import s from './index.module.css';
import Spoiler from '../../common/Spoiler';


export default function Footer() {

  return (
    <footer>
      <div className={s.container}>
        <div className={s.block}>
          <Spoiler title="Contact">
            <p>Tel: +49 999 999 99 99</p>
            <div className={s.icons}>
              Lorem ipsum dolor
            </div>
          </Spoiler>

          <Spoiler title="Address">
            <p>Linkstraße 2 <br/> 10785 Berlin <br/> Deutschland</p>
            <p>Working Hours:<br/><b>24 hours a day</b></p>
          </Spoiler>

          <Spoiler title="Map">
            <div className={s.img}>
              <iframe 
                frameBorder='no' 
                width='100%'
                height='100%'
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Linkstra%C3%9Fe%202%20Berlin+(telranDE)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                title="Map">
              </iframe>
            </div>
          </Spoiler>
        </div>
      </div>
    </footer>
  )
}

