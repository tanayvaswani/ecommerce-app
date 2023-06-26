import { useEffect, useState } from "react";
import Product from "../components/Product";

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(json => setProductsInfo(json));
  }, [])

  const categoryName = [...new Set(productsInfo.map(product => product.category))];

  return (
    <div className="p-5">
      <div>

        {categoryName.map(categoryNames => (
          <div key={categoryNames}>
            <h2 className="text-2xl">{categoryNames}</h2>

            <div className="flex">
              {productsInfo.filter(product => product.category === categoryNames).map(productInfo => (
                <div key={productInfo._id}>
                  <Product{...productInfo} />
                </div>
              ))}
            </div>

          </div>
        ))}

        <div className="py-4">
          
        </div>
      </div>
    </div>
  );
}
