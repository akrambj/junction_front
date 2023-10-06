import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerLogo from "../../assets/imgs/footerLogo.svg";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-[#202020] h-[300px] md:h-[200px]">
      <div className="flex flex-col items-center justify-center h-full gap-y-3 sm:flex-row sm:justify-between sm:items-center sm:px-10">
        <img src={footerLogo} alt="" />
        <div className="mt-10 sm:mt-0">
          <h2 className="text-white text-lg capitalize">contact us</h2>
          <div className="flex items-center justify-center gap-x-5 mt-4 text-xl text-white">
            <FontAwesomeIcon icon={faX} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <ul className="text-center capitalize text-white sm:flex sm:items-center sm:justify-center sm:gap-x-5">
            <li>FAQ</li>
            <li>Overview</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
