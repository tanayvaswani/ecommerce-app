import Layout from "@/components/Layout";
import { ProductsContext } from "@/components/ProductsContext";
import { useContext, useEffect, useState } from "react";

export default function Checkout() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch("/api/products?ids=" + uniqIds.join(","))
      .then((response) => response.json())
      .then((json) => setProductsInfos(json));
  }, [selectedProducts]);

  function moreOfThisProduct(id) {
    setSelectedProducts((prev) => [...prev, id]);
  }
  function lessOfThisProduct(id) {}

  return (
    <Layout>
      {!productsInfos.length && <div>No products in your shopping cart!</div>}

      {productsInfos.length &&
        productsInfos.map((productInfo) => (
          <div className="flex mb-5">
            <div className="bg-gray-100 p-3 rounded-xl shrink-0">
              <img className="w-24" src={productInfo.pictures} alt="" />
            </div>
            <div className="pl-4">
              <h3 className="font-bold text-lg">{productInfo.name}</h3>
              <p className="text-sm leading-4 text-gray-500">
                {productInfo.description}
              </p>
              <div className="flex">
                <div className="grow">${productInfo.price}</div>
                <div>
                  <button 
                    onClick={}
                    className="bg-emerald-500 px-2 rounded-lg text-white">
                    -
                  </button>
                  <span className="px-2">
                    {
                      selectedProducts.filter((id) => id === productInfo._id)
                        .length
                    }
                  </span>
                  <button
                    onClick={() => moreOfThisProduct(productInfo._id)}
                    className="bg-emerald-500 px-2 rounded-lg text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </Layout>
  );
}
