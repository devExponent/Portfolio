import Button from "../Button";
const NavBar = () => {
  return (
    <div className="text-white bg-black flex items-center py-6 px-14 justify-between">
      <div className="">
        <h1 className="font-bold text-3xl">Okunlola Muhammad Toyeeb</h1>
      </div>
      <div>
        <ul className="flex items-center gap-8 cursor-pointer font-bold">
          <li className="transform transition hover:text-blue-400 hover:scale-110">
            Home
          </li>
          <li className="transform transition hover:text-blue-400 hover:scale-110">
            Featured projects
          </li>
          <li className="transform transition hover:text-blue-400 hover:scale-110">
            About me
          </li>
          <li className="transform transition hover:text-blue-400 hover:scale-110">
            Achievements
          </li>
          <li className="transform transition hover:text-blue-400 hover:scale-110">
            Contact
          </li>
          <li>
            <Button className="transform transition bg-white text-black hover:scale-110 hover:text-blue-600">
              Download CV
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
