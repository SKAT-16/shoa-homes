import { Link, Location, useLocation } from "react-router-dom";
import dark_logo from "../../assets/logo-dark-blue.png";
import light_logo from "../../assets/logo-light-white.png";
import { useEffect, useState, useRef } from "react";
import SearchBar from "./search_bar";

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

export default function Header() {
  const currentPage: Location = useLocation();

  return (
    <div
      className={`relative px-12 pt-12 pb-5 shadow-md ${
        currentPage.pathname.includes("projects") && "bg-nav-bar"
      }`}>
      <NavBar page={currentPage.pathname} />
      {currentPage.pathname.includes("projects") && <SearchBar />}
    </div>
  );
}

interface NavBarProps {
  page: string;
}
function NavBar({ page }: NavBarProps) {
  const [pointerXLocation, setPointerPosition] = useState(0);
  const navRef = useRef(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPointerPosition(e.currentTarget.getBoundingClientRect().left);
  };

  useEffect(() => {
    const foundIndex = navLinkEndPoints.findIndex((item, index) => {
      if (page.includes(item)) return index;
    });
    const index = foundIndex !== -1 ? foundIndex : 0;

    const currLink = navRef.current?.children[index];
    setPointerPosition(currLink?.getBoundingClientRect().left || 0);
  }, []);

  return (
    <nav className="flex items-center justify-center">
      <PagePointer page={page} xPos={pointerXLocation} />
      <Link
        to="/"
        onClick={() =>
          setPointerPosition(
            navRef.current?.children[0].getBoundingClientRect().left || 0
          )
        }>
        <img
          src={page.includes("projects") ? light_logo : dark_logo}
          alt="LOGO"
          className="w-20 hover:scale-105 hover:-rotate-3 active:scale-90 transition-transform duration-300"
        />
      </Link>

      <ul
        className={`ml-auto flex justify-center space-x-12 text-xl ${
          page.includes("projects") ? "text-white" : "text-blue-900"
        }`}
        ref={navRef}>
        {navLinkStrings.map((item, index) => (
          <Link
            to={`${navLinkEndPoints[index]}`}
            key={index}
            onClick={handleLinkClick}
            className={`hover:scale-110 active:scale-95 transition duration-200`}>
            {item}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

interface PagePointerProps {
  page: string;
  xPos: number;
}
function PagePointer({ page, xPos }: PagePointerProps) {
  const translateX = `translateX(${xPos}px)`;
  const pointerStyle = {
    transform: translateX,
  };

  return (
    <div
      className={`absolute ${
        page.includes("projects") ? "bg-white" : "bg-pointer-color"
      }  w-4 h-20 shadow-lg top-0 left-0 transition-transform duration-500 ease-in-out`}
      style={pointerStyle}
    />
  );
}
