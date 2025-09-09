import hero from "../assets/hero.jpg"

const Hero = () => {
  return (
    <section
      className="relative h-[640px] bg-cover bg-center flex items-center justify-center"
      // style={{ backgroundImage: `url(${hero})` }}
    >
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-xl">
        <p className="text-lime-600 mb-2">Say Hello to ToyStore!</p>
        <h1 className="text-3xl font-bold mb-4">
          Free Ecommerce Template for Webflow
        </h1>
        <button className="bg-lime-600 text-white px-6 py-3 rounded-full font-medium hover:bg-lime-700 transition">
          Open Catalog
        </button>
      </div>
    </section>
  );
};

export default Hero;
