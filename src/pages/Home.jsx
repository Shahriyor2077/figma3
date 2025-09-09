import Category from "../components/category/Category";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Product from "../components/product/Product";
import Top from "../components/top/Top";
import teddy from "../assets/teddy.png";
import biscuite from "../assets/biscuite.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import fout from "../assets/fout.png";
import four from "../assets/four.png";
import fiwe from "../assets/fiwe.png";
import six from "../assets/six.png";
import Stary from "../components/stary/Stary";
import Simple from "../components/simple/Simple";
import Instagram from "../components/instagram/Instagram";
import Footer from "../components/footer/Footer";

const Home = () => {
  const categories = [
    {
      title: "Stuffed Animals",
      bgColor: "bg-yellow-400",
      image: teddy,
    },
    {
      title: "Wooden Toys",
      bgColor: "bg-pink-500",
      image: biscuite,
    },
  ];

  const products = [
    { name: "Teddy Bear", price: 30, image: teddy },
    { name: "Mega Plush Toy", price: 38, image: two },
    { name: "Cute Dog", price: 24, image: three },
    { name: "Little Friend", price: 27, image: fout },
    { name: "Happy Flower", price: 30, image: biscuite },
    { name: "Lift Machine", price: 38, image: four },
    { name: "Wooden Camera", price: 24, image: fiwe },
    { name: "Little Rabbit", price: 32, image: six },
  ];

  return (
    <div>
      <Top />
      <Header />
      <Hero />
      <div className="flex gap-6 px-10 my-10">
        {categories.map((cat, index) => (
          <Category key={index} {...cat} />
        ))}
      </div>
      <div className="px-10 my-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Stuffed Animals</h2>
          <button className="text-sm text-gray-600 flex items-center gap-2">
            See All Toys →
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <Stary />
      <Simple />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Home;
