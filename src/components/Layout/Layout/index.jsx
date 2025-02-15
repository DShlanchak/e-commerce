import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header'
import s from './index.module.css';

export default function MainLayout() {
  return (
    <div className={s.wrapper}>
        <Header/>
        <div className={s.page}>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
