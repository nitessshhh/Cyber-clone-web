const Navbar = () => {
  return (
    <div
      className=" navbar_1 img  fixed z-50"
      style={{
        width: "100vw",
        height: "auto",
        backgroundImage:
          "url(https://scintillating-cactus-1790de.netlify.app/assets/img/hero-bg.png)",
      }}
    >
      {" "}
      <div className=" nav w-auto  h-20   	 bg-transparent  flex justify-between items-center ">
        <div className="right flex ml-24 ">
          <img
            src="https://scintillating-cactus-1790de.netlify.app/assets/img/logo.png"
            className=" h-auto"
            alt=""
          />
          <span className=" text-3xl  font-bold cursor-pointer text-indigo-900">
            CyberInstant
          </span>
        </div>

        <div className="left flex">
          <ul className="flex gap-8 mr-20 text-base font-semibold  cursor-pointer text-blue-700 hover:text-blue-500">
            <li>Home</li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              {" "}
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <div className="dropdown">
                <span>Drop Down</span>
                <div className="dropdown-content">
                  <p>Drop Down 1</p>
                  <p>Drop Down 2</p>
                  <p>Drop Down 3</p>
                  <p>Drop Down 4</p>
                  <p>Drop Down 5</p>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <span>Mega Menu</span>
                <div className="dropdown-menu ">
                  <div className="onemenu">
                    <p>Coloum 1 link 1</p>
                    <p>Coloum 1 link 2</p>
                    <p>Coloum 1 link 3</p>
                    <p>Coloum 1 link 4</p>
                    <p>Coloum 1 link 5</p>
                  </div>
                  <div className="twomenu">
                    <p>Coloum 1 link 1</p>
                    <p>Coloum 1 link 2</p>
                    <p>Coloum 1 link 3</p>
                    <p>Coloum 1 link 4</p>
                    <p>Coloum 1 link 5</p>
                  </div>
                  <div className="threemenu">
                    <p>Coloum 1 link 1</p>
                    <p>Coloum 1 link 2</p>
                    <p>Coloum 1 link 3</p>
                    <p>Coloum 1 link 4</p>
                    <p>Coloum 1 link 5</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <button className=" bg-blue-700 text-white py-2 px-6 rounded-lg  hover:bg-blue-500  ">
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


