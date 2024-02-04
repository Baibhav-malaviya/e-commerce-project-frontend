import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../Services/apiProducts";
import { addToCart } from "../../Services/apiCart";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { formatCurrency, formatName } from "../../Helper/Formatter";
import Button from "../components/Button";

function ProductItem() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    (async () => setProduct(await getProductById(productId)))();
  }, [productId]);

  console.log("PRODUCT IN THE PRODUCT ITEM:  ", product);
  const { _id, name, productImage, category, stock, price, description, tags, reviews } = product;

  const handleAddToCart = async () => {
    const addedItem = await addToCart(1, productId);
    console.log("Item added to cart: ", addedItem);
  };

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
          <Button
            bgColor="bg-stone-800"
            color=" text-stone-100"
            className="px-[5px] text-xs sm:text-lg sm:px-3"
            // className="p-2 px-3 font-bold rounded cursor-pointer bg-stone-800 text-stone-100"
            onClick={handleAddToCart}
          >
            Add to Cart +
          </Button>
          <Button
            bgColor="bg-transparent hover:bg-stone-900"
            color=" text-stone-900 hover:text-stone-100"
            className="px-[5px] text-xs sm:text-lg ring-2 ring-stone-900 sm:px-3"
            // className="p-2 px-3 font-bold rounded cursor-pointer bg-stone-800 text-stone-100"
            onClick={handleAddToCart}
          >
            Add to Cart +
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center h-auto overflow-hidden rounded w-80 ring-2 ring-stone-800 sm:w-auto sm:h-80 sm:flex-row ">
          <div className="w-full h-full ">
            <img src={productImage} className="w-full h-full " alt={`${name}-image`} />
          </div>

          <div className="flex flex-col justify-between w-full h-full p-3 py-5 gap-y-4">
            <div>
              <span className="inline-block font-bold ">{formatName(name)}</span>
            </div>

            <div className="text-xs italic capitalize text-stone-400">{description}</div>
            <div className="">
              Price: <span className="font-bold">{formatCurrency(price)}</span>{" "}
              <span className="">
                <span className="mx-2 font-semibold capitalize">off</span>
                <span>(35%)</span>
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
              <span
                className="p-2 px-3 text-xs font-bold rounded cursor-pointer hover:bg-stone-700 bg-stone-900 text-stone-100"
                onClick={handleAddToCart}
              >
                Add to Cart +
              </span>
              <span className="p-2 px-3 text-xs font-bold rounded cursor-pointer hover:bg-stone-800 ring-2 ring-stone-900 text-stone-900 hover:text-stone-100">
                Add to Cart +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// { _id, name, productImage, category, stock, price, description, tags, reviews }

export default ProductItem;
