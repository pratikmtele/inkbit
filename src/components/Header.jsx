"use client";

import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import Button from "./Button";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import Logo from "../../public/inkbit_logo.png";
import Image from "next/image";

export default function Header() {
  const [isNavbarOpen, setIsNavnarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsNavnarOpen(true);
      else setIsNavnarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navVariants = {
    closed: { x: "-100%" },
    open: { x: 0 },
    static: { x: 0 },
  };

  return (
    <div className="section-container py-3 flex justify-between items-center bg-white dark:bg-black">
      <h2 className="text-primary">
        <Link href="/">
          <Image src={Logo} width={130} height={130} alt="Inkbit" />
        </Link>
      </h2>
      <div className="flex gap-5 items-center">
        <IoIosSearch className="text-dark dark:text-light z-50 text-xl cursor-pointer" />
        <motion.ul
          className={`text-dark dark:text-light flex flex-col gap-5 absolute top-0 left-0 z-50 w-full h-screen px-7 py-5 bg-white dark:bg-black md:flex-row md:static md:gap-5 md:items-center md:w-fit md:px-0 md:py-0 md:h-fit`}
          initial={isMobile ? "closed" : "open"}
          animate={isMobile ? (isNavbarOpen ? "open" : "closed") : "open"}
          variants={navVariants}
          transition={{ type: "tween" }}
          onWheel={() => setIsNavnarOpen(false)}
        >
          <div className="w-full flex justify-end mb-3 md:hidden">
            <IoCloseOutline
              className="text-xl text-dark dark:text-light cursor-pointer w-fit border rounded-full"
              onClick={() => setIsNavnarOpen(false)}
            />
          </div>
          <li className="w-full md:w-fit relative animated-underline">
            <Link href="#">Contact</Link>
          </li>
          <li className="w-full md:w-fit relative animated-underline">
            <Link href="#">About</Link>
          </li>
          <li className="w-full md:w-fit relative animated-underline">
            <Link href="#">Write</Link>
          </li>
          <li className="w-full md:w-fit relative animated-underline">
            <Link href="#">Sign In</Link>
          </li>
          <Button label="Get Started" />
        </motion.ul>
        <FiMenu
          className="text-xl cursor-pointer md:hidden text-dark dark:text-light"
          onClick={() => setIsNavnarOpen(true)}
        />
      </div>
    </div>
  );
}
