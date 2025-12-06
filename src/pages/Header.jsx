import NavBar from "../component/nav/NavBar";
import ProfileImg from "../assets/Profile.jpeg";

const Header = () => {
  return (
    <div>
      <NavBar />
      <section className="min-h-screen flex items-center justify-center">
        <div className=" w-10/12 lg:w-8/12 grid grid-cols-1  items-center gap-5 md:grid-cols-2 text-white ">
          <div className="order-2 md:order-1 flex flex-col gap-2">
            <p className="mb-2 text-sm text-[#2753b1] font-bold sm:text-lg">
              Learning, Building & Advancing Human-Centered Technology.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-100">
              Hello, I am Muhammad.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold text-gray-200">
              A Frontend Software Engineer in growth mode.
            </p>
            <p>
              I transform ideas into user-friendly and interactive web
              applications. Continuously building practical skills in React.js,
              modern JavaScript frameworks, and cloud technologies to create
              responsive and data-driven interfaces.
            </p>

            <p></p>
          </div>
          <div className="order-1 md:order-2 mx-auto max-sm:mb-3">
            <div className="w-full aspect-square max-w-[350px] mx-auto">
              <img
                src={ProfileImg}
                alt="profile image"
                className="rounded-full shadow-2xl shadow-[#09389742] w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
