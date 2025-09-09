

const Category = ({ bgColor, image, title }) => {
  return (
    <div
      className={`flex items-center mx-auto text-center  justify-between rounded-xl p-6 text-white ${bgColor}`}
      style={{ width: "570px", height: "188px" }}
    >
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-full mt-4">
          Shop Now
        </button>
      </div>
      <img src={image} alt={title} className="h-28 object-contain" />
    </div>
  );
};

export default Category;


