import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../Services/apiProducts";
import { addToCart } from "../../Services/apiCart";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

function ProductItem() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    (async () => setProduct(await getProductById(productId)))();
  }, [productId]);
  console.log(product);

  return (
    <div className="fixed px-8 py-6 top-32 bottom-10 inset-x-2 sm:inset-20 bg-cyan-200/50 ">
      <div className="flex items-center justify-between p-2 rounded bg-cyan-300">
        {" "}
        <span
          className="p-2 px-3 font-bold rounded cursor-pointer bg-stone-800 text-stone-100"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft strokeWidth={2.75} />
        </span>
        <div className="flex gap-2">
          <span
            className="p-2 px-3 font-bold rounded cursor-pointer bg-stone-800 text-stone-100"
            onClick={() => addToCart(1, productId)}
          >
            Add to Cart +
          </span>
          <span
            className="p-2 px-3 font-bold rounded cursor-pointer bg-stone-800 text-stone-100"
            onClick={() => navigate("/orders", { state: productId })}
          >
            Order
          </span>
        </div>
      </div>

      {`This is product item component.`}
      <span className="mx-2 font-bold underline">{`#${productId}`}</span>
    </div>
  );
}

export default ProductItem;
