"use client";
import { useState } from "react";
import hamburgerLogo from "@/public/Icons/Hamburger-menu.svg";
import Image from "next/image";
// ################# HAMBURGER MENU #################
function HamburgerMenu({ setIsOpen }) {
  return (
    <Image
      src={hamburgerLogo}
      alt="hamburger_menu_logo"
      onClick={() => setIsOpen(true)}
      className="md:hidden cursor-pointer"
    />
  );
}
// ################# OVERLAY #################
function Overlay({ setIsOpen, isOpen }) {
  return (
    <div
      className={`w-full h-screen fixed opacity-50 bg-overlay-100 top-0 left-0 z-10 cursor-pointer ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={() => setIsOpen(false)}
    ></div>
  );
}
// ################# SIDEBAR #################
function Sidebar({ isOpen, setIsOpen }) {
  const subCategories = ["Organic Fresh Vegetables", "Local Fruits"];
  const subCategoriesTwo = ["Grains", "Legumes", "Seeds"];
  const subCategoriesThree = ["Coconut Oil", "Mustard Oil"];
  return (
    <>
      <Overlay setIsOpen={setIsOpen} isOpen={isOpen} />
      <div
        className={`h-screen bg-secondary-100 flex flex-col absolute top-0 left-0 xs:w-60 sm:80 z-20 transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100 " : "-translate-x-full opacity-0"
        }`}
      >
        <div className="bg-secondary-400 py-2 flex justify-center gap-2 items-center">
          <img src="/Icons/logo.svg" alt="Khatikrishi-logo" />
          <p className="font-bold text-primary-500">Khatikrishi.com</p>
        </div>
        <div className="p-4 border-b border-neutral-300">
          <p className="text-primary-500 text-xl font-semibold">
            All Categories
          </p>
        </div>
        <SidebarItem
          title="Fresh Produce"
          icon="./Icons/cat-1-logo.svg"
          subCategories={subCategories}
        />
        <SidebarItem
          title="Seeds and Grains"
          icon="./Icons/Carbohydrates.svg"
          subCategories={subCategoriesTwo}
        />
        <SidebarItem
          title="Cold Pressed Oils"
          icon="./Icons/Olive-oil-bottle.svg"
          subCategories={subCategoriesThree}
        />
      </div>
    </>
  );
}

// ################# SIDEBAR ITEM #################
function SidebarItem({ title, icon, subCategories }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`flex justify-between px-2 py-4`}>
        <button
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={icon} alt={title} />
          <p className="text-black font-medium text-base hover:text-primary-500 hover:font-semibold transition-all duration-500">
            {title}
          </p>
        </button>
        <img
          src="/Icons/chevron-right.svg"
          alt="Dropdown-icon"
          className={`${
            isOpen ? "rotate-90" : "rotate-0"
          } transition-all duration-500`}
        />
      </div>
      <div
        className={`xs:px-6 sm:px-12 transition duration-300 ease-in-out  ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        {subCategories.map((subCategory) => (
          <p className="text-black text-[14px] font-normal">-{subCategory}</p>
        ))}
      </div>
    </>
  );
}
// ################# SIDEBAR WRAPPER #################
function SidebarWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HamburgerMenu setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
export { SidebarWrapper };
