import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
 HEAD

import logo from "../public/images/NewImages/Nav_BcardLogo.svg";
import hamburger from "../public/images/NewImages/Nav_Hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="mx-[54px] mb-[54px] mt-[36px] flex h-24 items-center justify-between rounded-[20px] bg-[#2D2D2D] px-[10px]">
        <Link
          id="Nav_Logo"
          href="/"
          className="h-fit rounded-[20px] py-4 pl-4 hover:bg-[#212121]"
        >
          <Image
            priority
            src={logo}
            className=""
            height={51}
            width={212}
            alt="BCard"
          />
        </Link>

        <div
          id="Nav_HamburgerMenuContent"
          className={`relative bg-yellow-300 transition-all duration-300 ease-in-out ${
            isOpen ? "h-[380px] w-[480px] p-8 pb-4" : "h-12 w-12"
          }`}
          style={{
            transformOrigin: isOpen ? "top right" : "top right",
            transform: isOpen ? "scale(1)" : "scale(1)",
          }}
        >
          <button
            id="Nav_Hamburger"
            onMouseDown={() => setIsOpen(!isOpen)}
            className="absolute right-0 top-0 z-50 block rounded-[20px] p-4 text-gray-700 hover:bg-[#212121] hover:text-white focus:text-white focus:outline-none"
          >
            <Image
              priority
              src={hamburger}
              className=""
              height={48}
              width={48}
              alt="hamburger"
            />
          </button>
          {isOpen && (
            <div className="absolute left-0 top-16 w-full">
              <Link href="/link1" className="block py-2 text-black">
                Link 1
              </Link>
              <Link href="/link2" className="block py-2 text-black">
                Link 2
              </Link>
              <Link href="/link3" className="block py-2 text-black">
                Link 3
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
import { useRouter } from "next/router";
import styles from '@/styles/Navbar.module.css'

import logo from "../public/images/new-logo.png";
import hamburger from "../public/images/hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (pathname: string) => {
    return router.pathname === pathname ? `text-purple-500 ${styles['border-bottom']}` : `${styles['border-hover-bottom']}`
  };

  return (
    <nav className="flex justify-between items-center max-[767px]:px-[1rem] max-[767px]:pt-[1rem] p-[3rem]">
      <Link href="/" className="z-50">
        <Image
          priority
          src={logo}
          className=""
          height={56.97}
          width={179}
          alt="BCard"
        />
      </Link>
      <div className="hidden md:flex gap-5">
        <Link href="/for-daos" className={isActive("/for-daos")}>For Communities</Link>
        <Link href="/for-investors" className={isActive("/for-investors")}>For Investors</Link>
        <a
          href="https://banklesscard.mirror.xyz/"
          target="_blank"
          rel="noreferrer"
          className={`${styles['border-hover-bottom']}`}
        >
          Blog
        </a>
        <Link href="/contact-us" className={isActive("/contact-us")}>Contact Us</Link>
      </div>
      <div className="md:hidden">
        <button
          onClick={handleToggle}
          className="block text-gray-700 hover:text-white focus:text-white focus:outline-none"
        >
          <Image
            priority
            src={hamburger}
            className=""
            height={25}
            width={25}
            alt="hamburger"
          />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full bg-white z-50`}
        >
          <div className="p-4">
            <Link
              href="/for-daos"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="block text-gray-800 hover:text-white py-2">
                For Communities
              </p>
            </Link>
            <Link
              href="/for-investors"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="block text-gray-800 hover:text-white py-2">
                For Investors
              </p>
            </Link>
            <a
              href="https://banklesscard.mirror.xyz/"
              target="_blank"
              rel="noreferrer"
              className="block text-gray-800 hover:text-white py-2"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Blog
            </a>
            <Link
              href="/contact-us"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <p className="block text-gray-800 hover:text-white py-2">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
>>>>>>> f0d57282db67efb87784feb57567225d23b1e3da
  );
};

export default Navbar;
