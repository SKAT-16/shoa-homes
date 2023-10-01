import { Link, Location, useLocation } from "react-router-dom";
import dark_logo from "../../assets/images/logo-dark-blue.png";
import light_logo from "../../assets/images/logo-light-white.png";
import { useEffect, useState, useRef } from "react";

function Header() {
  const currentPage: Location = useLocation();
  return (
    <div className="relative px-12 pt-12 pb-5 shadow-md">
      <NavBar page={currentPage.pathname} />
    </div>
  );
}

interface PagePointerProps {
  xPos: number;
}
function PagePointer({ xPos }: PagePointerProps) {
  const translateX = `translateX(${xPos}px)`;
  const pointerStyle = {
    transform: translateX,
  };

  return (
    <div
      className="absolute bg-pointer-color w-4 h-20 shadow-lg top-0 left-0 transition-transform duration-500 ease-in-out"
      style={pointerStyle}
    />
  );
}

interface NavBarProps {
  page: string;
}
function NavBar({ page }: NavBarProps) {
  const [pointerXLocation, setPointerPosition] = useState(440);
  const homeLink = useRef<HTMLAnchorElement | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPointerPosition(
      e.currentTarget.getBoundingClientRect().left +
        e.currentTarget.getBoundingClientRect().width / 3
    );
  };

  useEffect(() => {
    setPointerPosition(
      homeLink.current.getBoundingClientRect().left +
      homeLink.current.getBoundingClientRect().width / 3
    );
  }, []);

  return (
    <nav className="font-poppins flex items-center justify-center">
      <PagePointer xPos={pointerXLocation} />

      <Link to="/" onClick={() => setPointerPosition(
      homeLink.current.getBoundingClientRect().left +
      homeLink.current.getBoundingClientRect().width / 3)}>
        <img
          src={page.includes("projects") ? light_logo : dark_logo}
          alt="LOGO"
          className="w-20 hover:scale-105 hover:-rotate-3 active:scale-90 transition-transform duration-300"
        />
      </Link>

      <ul className="ml-auto flex justify-center space-x-12 text-xl">
        <Link to="/" ref={homeLink} onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/blog" onClick={handleLinkClick}>
          Blog
        </Link>
        <Link to="/partnership" onClick={handleLinkClick}>
          Partnership
        </Link>
        <Link to="/projects" onClick={handleLinkClick}>
          Projects
        </Link>
        <Link to="/partnership" onClick={handleLinkClick}>
          Partnership
        </Link>
        <Link to="/about" onClick={handleLinkClick}>
          About Us
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact Us
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
