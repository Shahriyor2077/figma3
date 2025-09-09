
const Product = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-xl  shadow p-4 flex flex-col items-center">
      <img src={image} alt={name} className="h-32 mb-4" />
      <h3 className="text-lg font-medium mb-2">{name}</h3>
      <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
        ${price.toFixed(2)} USD
      </span>
    </div>
  );
};

export default Product;
