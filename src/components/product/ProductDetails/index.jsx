import { useParams } from "react-router-dom";
import { useSingleProduct } from "../../../api/shopApi";
import { baseURL } from "../../../config";

export default function ProductDetails() {
    const {id} = useParams();
    const {
        data,
        isLoading,
        isError,
      } = useSingleProduct(id);

      console.log(data)

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading product</p>;
    if (!data?.length) return <p>No product details.</p>;

    const product = data[0];

    return (
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price} €</p>
            {product.image && <img src={`${baseURL}${product.image}`} alt={product.title} />}
        </div>
    )
}
