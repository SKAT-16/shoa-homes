import { Link, Location, useLocation } from "react-router-dom";
import dark_logo from "../../assets/logo-dark-blue.png";
import light_logo from "../../assets/logo-light-white.png";
import { useEffect, useState, useRef } from "react";

const navLinkStrings: string[] = [
  "Home",
  "Blog",
  "Partnership & Dev't",
  "Projects",
  "About Us",
  "Contact Us",
];
const navLinkEndPoints: string[] = [
  "/",
  "/blog",
  "/partnership",
  "/projects",
  "/about",
  "/contact",
];

function Header() {
  const currentPage: Location = useLocation();
  return (
    <div className="relative px-12 pt-12 pb-5 shadow-sm">
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
  const [pointerXLocation, setPointerPosition] = useState(0);
  const navRef = useRef<HTMLAnchorElement | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPointerPosition(
      e.currentTarget.getBoundingClientRect().left +
        e.currentTarget.getBoundingClientRect().width / 3
    );
  };

  useEffect(() => {
    const index = navLinkEndPoints.findIndex((item) => page === item);
    const currLink = navRef.current?.children[index];
    setPointerPosition(
      currLink.getBoundingClientRect().left +
        currLink.getBoundingClientRect().width / 2
    );
  }, []);

  return (
    <nav className="flex items-center justify-center">
      <PagePointer xPos={pointerXLocation} />

      <Link
        to="/"
        onClick={() =>
          setPointerPosition(
            navRef.current.children[0].getBoundingClientRect().left +
              navRef.current.children[0].getBoundingClientRect().width / 3
          )
        }>
        <img
          src={page.includes("projects") ? light_logo : dark_logo}
          alt="LOGO"
          className="w-20 hover:scale-105 hover:-rotate-3 active:scale-90 transition-transform duration-300"
        />
      </Link>

      <ul
        className="ml-auto flex justify-center space-x-12 text-xl text-blue-900"
        ref={navRef}>
        {navLinkStrings.map((item, index) => (
          <Link
            to={`${navLinkEndPoints[index]}`}
            key={index}
            onClick={handleLinkClick}>
            {item}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
