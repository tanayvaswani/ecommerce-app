import { useEffect, useState } from "react";
import Product from "../components/Product";
import { initMongoose } from "../../lib/mongoose";
import { getAllProducts } from "./api/products";

export default function Home({products}) {
  const [phrase, setPhrase] = useState("");

  const categoryName = [
    ...new Set(products.map((product) => product.category)),
  ];

  if (phrase) {
    products = products.filter((product) =>
      product.name.toLowerCase().includes(phrase)
    );
  }

  return (
    <div className="p-5">
      <input
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        type="text"
        placeholder="Search for products"
        className="bg-gray-100 w-full py-2 px-4 rounded-xl"
      />
      <div>
        {categoryName.map((categoryNames) => (
          <div key={categoryNames}>
            {products.find((product) => product.category === categoryNames) && (
              <div>
                <h2 className="text-2xl py-5">{categoryNames}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products
                    .filter((product) => product.category === categoryNames)
                    .map((productInfo) => (
                      <div key={productInfo._id} className="px-5 snap-start">
                        <Product {...productInfo} />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await getAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}