import { Link} from "react-router-dom";

export default function CategoryCard ({category}) {
    return (
        <Link to={`/categories/${category.id}`}>
            <div>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} />
                <p>{category.title}</p>
            </div>                 
        </Link>
    );
}