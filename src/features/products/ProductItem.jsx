import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../Services/apiProducts";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { formatCurrency, formatName } from "../../Helper/Formatter";
import Loader from "../components/Loader";
import AddToCartButton from "../cart/AddToCartButton";

function ProductItem() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setProductLoading(false);
    (async () => {
      try {
        setProductLoading(true);
        setProduct(await getProductById(productId));
      } catch (error) {
        console.log("Error in getProductById: " + error.message);
      } finally {
        setProductLoading(false);
      }
    })();
  }, [productId]);

  console.log("PRODUCT IN THE PRODUCT ITEM:  ", product);
  const { _id, name, productImage, category, stock, price, description, tags, reviews } = product;

  // if (productLoading) return <div className="p-20 bg-orange-600">Loading...</div>;

  return (
    <div className="fixed space-y-2 top-32 bottom-10 inset-x-2 sm:inset-20 bg-cyan-200/50 ">
      <div className="flex items-center justify-between p-2 rounded bg-cyan-300">
        {" "}
        <span
          className="p-2 px-3 text-xs font-bold rounded cursor-pointer sm:text-lg bg-stone-800 text-stone-100"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft strokeWidth={2.75} />
        </span>
        <div className="flex gap-2">
          <AddToCartButton
            productId={productId}
            setIsLoading={setIsLoading}
          >{`${isLoading ? "Adding..." : "Add to Cart +"}`}</AddToCartButton>
        </div>
      </div>

      {productLoading ? (
        <Loader />
      ) : (
        <div className="flex items-center justify-center ">
          <div className="flex flex-col items-center h-auto overflow-hidden rounded w-80 ring-2 ring-stone-800 sm:w-auto sm:h-80 sm:flex-row ">
            <div className="w-full h-full ">
              <img src={productImage} className="w-full h-full " alt={`${name}-image`} />
            </div>

            <div className="flex flex-col justify-between w-full h-full p-3 py-5 gap-y-4">
              <div>
                <span className="inline-block font-bold ">{formatName(name)}</span>
              </div>

              <div className="text-xs italic font-semibold capitalize text-stone-400">{description}</div>
              <div className="">
                Price: <span className="font-bold">{formatCurrency(price)}</span>{" "}
                <span className="">
                  <span className="mx-2 font-semibold capitalize">off</span>
                  <span className="text-xs">(35%)</span>
                </span>
              </div>

              <div className="flex gap-2">
                <span className="p-2 px-4 font-semibold rounded-full hover:ring-2 ring-offset-2 hover:cursor-pointer text-stone-200 bg-stone-900">
                  6
                </span>
                <span className="p-2 px-4 font-semibold rounded-full hover:ring-2 ring-offset-2 hover:cursor-pointer text-stone-200 bg-stone-900">
                  7
                </span>
                <span className="p-2 px-4 font-semibold rounded-full hover:ring-2 ring-offset-2 hover:cursor-pointer text-stone-200 bg-stone-900">
                  8
                </span>
              </div>

              <div className="flex gap-2">
                <AddToCartButton
                  productId={productId}
                  setIsLoading={setIsLoading}
                  type="sm"
                >{`${isLoading ? "Adding..." : "Add to Cart +"}`}</AddToCartButton>
                <span className="p-2 px-3 text-xs font-bold rounded cursor-pointer hover:bg-stone-800 ring-2 ring-stone-900 text-stone-900 hover:text-stone-100">
                  Add to Cart +
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// { _id, name, productImage, category, stock, price, description, tags, reviews }

export default ProductItem;
