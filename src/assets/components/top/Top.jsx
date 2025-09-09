import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Top = () => {
  return (
    <div>
      <div className="bg-lime-600 justify-between text-white text-sm flex gap-8 px-6 py-2">
        <div>Call us: +1 213 974 5898</div>
        <div>Email: toystore@template.com</div>
        <div className="flex gap-4 text-xl">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaPinterest />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Top;
