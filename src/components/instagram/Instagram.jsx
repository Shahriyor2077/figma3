import insta1 from "../../assets/insta1.jpg";
import insta2 from "../../assets/insta2.jpg";
import insta3 from "../../assets/insta3.jpg";
import insta4 from "../../assets/insta4.jpg";
import insta5 from "../../assets/insta5.jpg";
import insta6 from "../../assets/insta6.jpg";

const Instagram = () => {
  return (
    <section className="text-center my-20">
      <p className="text-green-500">@ElasticThemes</p>
      <h2 className="text-2xl font-semibold mb-6">We're on Instagram!</h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <img
          src={insta1}
          alt="Insta1"
          className="w-40 h-40 object-cover rounded"
        />
        <img
          src={insta2}
          alt="Insta2"
          className="w-40 h-40 object-cover rounded"
        />
        <img
          src={insta3}
          alt="Insta3"
          className="w-40 h-40 object-cover rounded"
        />
        <img
          src={insta4}
          alt="Insta4"
          className="w-40 h-40 object-cover rounded"
        />
        <img
          src={insta5}
          alt="Insta5"
          className="w-40 h-40 object-cover rounded"
        />
        <img
          src={insta6}
          alt="Insta6"
          className="w-40 h-40 object-cover rounded"
        />
      </div>

      <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-full font-medium">
        See More Photos
      </button>
    </section>
  );
};

export default Instagram;
    