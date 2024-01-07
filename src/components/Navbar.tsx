import hilinkLogo from "../assets/Imagenes/hilink-logo.svg";
import { NAV_LINKS } from "../constants";
import UserSvg from "../assets/Imagenes/user.svg";
import Button from "./Button";
import Menu from "../assets/Imagenes/menu.svg";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <a href="#">
        <img src={hilinkLogo} alt="logo" width={74} height={29} />
      </a>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((navb) => (
          <li
            key={navb.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            <a href={navb.href}>{navb.label}</a>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon={UserSvg}
          variant="btn_dark_green"
        />
      </div>
      
      <button className="lg:hidden">
        <img
          src={Menu}
          alt="hamburgueza"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </button>
    </nav>
  );
};

export default Navbar;
