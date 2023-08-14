import React from "react";

function Header({ onClick, logo, menuItems, socialLinks }) {
  const rootAdress = "http://91.107.217.207";
  return (
    <header className="flex justify-between">
      <div id="menu" className="menu  px-4 py-7 w-9/12">
        <ul className="flex gap-x-10">
          <li className="menu-item">
            <a href="/">
              <img
                className="logo w-10 hover:cursor-pointer"
                src={rootAdress + logo?.data?.field_image?.uri?.url}
                alt="Logo"
              ></img>
            </a>
          </li>
          {menuItems?.data?.map((item, index) => (
            <li className="menu-item hidden lg:flex" key={index}>
              <a
                href={item.link.uri}
                className="text-white opacity-50 tracking-widest hover:cursor-pointer hover:opacity-100 text-xs font-poppins font-medium uppercase py-2.5"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="social-links pr-4 pt-8">
        <ul className="flex gap-4">
          {socialLinks?.data?.field_social_links?.map((item, index) => (
            <li className="hidden lg:block" key={index}>
              <a href={item.field_link.uri}>
                <img
                  className="w-6 opacity-50 hover:opacity-100 hover:cursor-pointer"
                  src={rootAdress + item?.field_icon_svg?.uri?.url}
                  alt="icon"
                ></img>
              </a>
            </li>
          ))}
          <li className="block lg:hidden">
            <button
              className="w-5 h-5 flex justify-between flex-col"
              onClick={onClick}
            >
              <span className="block w-full h-1 bg-white/50"></span>
              <span className="block w-full h-1 bg-white/50"></span>
              <span className="block w-full h-1 bg-white/50"></span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
