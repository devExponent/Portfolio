export const NavItem = ({ children }) => {
  return (
    <li className="transform transition duration-300 hover:text-blue-400 hover:scale-110 cursor-pointer">
      {children}
    </li>
  );
};
