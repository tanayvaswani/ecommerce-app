export default function Home() {
  return (
    <div className="p-5">
      <div>
        <h2 className="text-2xl">Mobiles</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src="/products/iphone.png" alt="" />
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">Apple iPhone 14 Pro Max</h3>
            </div>
            <p className="text-sm mt-1 leading-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              aut earum optio, animi amet modi possimus? Ab itaque facere
              numquam.
            </p>
            <div className="flex mt-1">
              <div className="text-2xl font-bold grow">$999</div>
              <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
