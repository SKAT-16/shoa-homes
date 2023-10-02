import facebook_icon from "../../assets/icons/facebook.png";
import instagram_icon from "../../assets/icons/instagram.png";
import linkedin_icon from "../../assets/icons/linkedin.png";
import twitter_icon from "../../assets/icons/twitter.png";

function Footer() {
  return (
    <footer className="bg-pointer-color p-8 mt-10 w-full flex items-stretch">
      <div className="p-5 flex-1 border-r-2">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-2xl font-bold">
            +251 9121212 <br />{" "}
            <span className="text-gray-500">
              Megenaga, <br /> Addis Ababa, Ethiopia{" "}
            </span>
          </h3>
          <button className="bg-white border border-blue-900 text-xl font-medium rounded-lg px-5 py-3 hover:scale-110 active:scale-95 transtion duration-200">
            Let's Talk
          </button>
        </div>

        <p className="text-lg font-light text-gray-100 mt-10 pr-10 leading-relaxed">
          If you are ready to find your perfect retreat, our real estate landing
          page is the perfect place to start. Browse our listings and discover
          homes that seamlessyly blend natural design with modern technology.
          Interested in learning more? Discuss your options with one of our
          agents today.
        </p>

        <div className="mt-10 flex items-center justify-between">
          <p className="text-gray-400">© All rights reserved</p>
          <div className="flex justify-center items-center gap-5">
            <img src={facebook_icon} alt="facebook-icon" />
            <img src={instagram_icon} alt="facebook-icon" />
            <img src={linkedin_icon} alt="facebook-icon" />
            <img src={twitter_icon} alt="facebook-icon" />
          </div>
        </div>
      </div>
      <div className="flex-1 "></div>
    </footer>
  );
}

export default Footer;
