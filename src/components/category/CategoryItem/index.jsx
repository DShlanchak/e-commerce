import { Link} from "react-router-dom";
import { baseURL } from "../../../config";
import s from './index.module.css';

export default function CategoryItem ({category}) {
    return (
        <Link to={`/categories/${category.id}`} className={s.link}>

            <div className={s.item}>
                <div className={s.imageWrapper}>
                    <img className={s.img} src={`${baseURL}${category.image}`} alt={category.title} />
                </div>
                <p>{category.title}</p>
            </div>                 
        </Link>
    );
}