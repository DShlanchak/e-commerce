import GridList from '../../common/GridList';
import CategoryItem from './CategoryItem';

export default function CategoryList({ data }) {
  return (
    <GridList>
      {data.map((category) => (
        <li key={category.id}>
          <CategoryItem category={category} />
        </li>
      ))}
    </GridList>
  );
}
