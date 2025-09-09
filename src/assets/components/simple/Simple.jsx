

const Simple = () => {
  return (
    <div className="p-10 bg-gray-50">
      <div className="text-center mb-10">
        <p className="text-green-500 text-sm">Made for Webflow</p>
        <h1 className="text-2xl font-bold text-gray-800">
          Simple & Colorful Ecommerce <br />
          Template for Your Business
        </h1>
      </div>

      <div className="flex items-start gap-10">
        <div className="w-1/2">
          <h2 className="text-lg font-semibold mb-3">Available for FREE!</h2>
          <p className="text-gray-500 mb-6 text-sm">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy
          </p>
          <button className="bg-lime-500 text-white px-6 py-2 rounded-full">
            GET IT NOW!
          </button>
        </div>

        <div
          style={{ backgroundImage: "url('/src/assets/simple.jpg" }}
          className="w-1/2"
        ></div>
      </div>

      <div className="mt-10 flex items-center gap-4 bg-white p-5 rounded-xl shadow">
        <div className="bg-lime-500 text-white p-3 ">✈</div>
        <div className="flex justify-between w-full items-center">
          <p className="text-gray-700 text-sm">
            Subscribe to our newsletter & get{" "}
            <span className="text-green-500 font-semibold">10% discount!</span>
          </p>
          <div className="mt-3 flex  border rounded-full overflow-hidden">
            <input
              type="email"
              className="flex-1 px-4 w-[400px] py-2 outline-none text-sm"
            />
            <button className="bg-lime-500 px-6 py-2 text-white text-sm">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simple;
