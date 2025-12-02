import Button from "../Button";
import { NavItem } from "./NavItem";
const NavBar = () => {
  return (
    <div className="text-white bg-black flex items-center py-6 px-14 justify-between">
      <div className="">
        <h1 className="font-bold text-3xl">Okunlola Muhammad Toyeeb</h1>
      </div>
      <div>
        <ul className="flex items-center gap-8 cursor-pointer font-bold">
          <NavItem>Home</NavItem>
          <NavItem>Featured projects</NavItem>
          <NavItem>About me</NavItem>
          <NavItem>Achievements</NavItem>
          <NavItem>Contact</NavItem>
          <li>
            <Button className="transform transition duration-300 bg-white text-black hover:scale-110 hover:text-blue-600">
              Download CV
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
