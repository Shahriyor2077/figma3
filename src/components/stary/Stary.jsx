import staryImage from "../../assets/stary.jpg";

const Stary = () => {
  return (
    <section
      className="relative h-[640px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${staryImage})` }}
    >
      <div className="text-white text-center ">
        <h1 className="text-3xl font-bold mb-4">Watch Our Story</h1>
        <p className="text-shadow-white mb-2">
          There is no magic formula to write perfect ad copy. It is based on a
          number of factors, including ad placement, demographic, even the
          consumer’s mood.
        </p>
        <button className="bg-lime-600 text-white px-3 py-2  font-medium hover:bg-lime-700 transition">
            Watch video
        </button>
      </div>
    </section>
  );
};

export default Stary;
