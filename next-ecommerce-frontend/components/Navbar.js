"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isError, setIsError] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="shadow-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      {/* Top Bar */}
      <div className="bg-gray-700 text-white hidden md:block py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm flex items-center">
            <span className="mr-6">🚚 Free Shipping Over $250</span>
            <div className="flex items-center">
              <span className="mr-3">📱 Download App</span>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-apple"></i>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-android"></i>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-windows"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-gray-600 text-white text-sm py-2 px-3 rounded-md">
              <option>English</option>
              <option>France</option>
            </select>
            <select className="bg-gray-600 text-white text-sm py-2 px-3 rounded-md">
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
              <Image
                src={isError ? "https://via.placeholder.com/128x32?text=Logo" : "/images/logo_light.png"}
                alt="Logo"
                className="w-32 hidden md:block"
                width={128}
                height={32}
                onError={() => setIsError(true)}
              />
          </Link>

          {/* Search Bar */}
          <div className="flex-grow mx-6">
            <form className="flex items-center bg-gray-800 text-gray-400 rounded-lg overflow-hidden">
              <select className="bg-gray-700 text-white px-4 py-2">
                <option>All Categories</option>
                <option>Dresses</option>
                <option>Shirt & Tops</option>
              </select>
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow px-4 py-2 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Search
              </button>
            </form>
          </div>

          {/* Icons */}
          <ul className="flex items-center space-x-6">
            <li className="relative">
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fas fa-user"></i>
              </Link>
            </li>
            <li className="relative">
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fas fa-heart"></i>
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2">
                  0
                </span>
              </Link>
            </li>
            <li className="relative">
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fas fa-shopping-cart"></i>
                <span className="absolute -top-2 -right-2 bg-green-500 text-xs text-white rounded-full px-2">
                  2
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              className="bg-blue-600 px-4 py-2 text-white flex items-center rounded hover:bg-blue-700"
              onClick={toggleNav}
            >
              <i className="fas fa-bars mr-2"></i>
              All Categories
            </button>
            <div
              className={`absolute z-20 bg-gray-900 shadow-md rounded-lg mt-2 w-72 p-4 ${
                isNavOpen ? "block" : "hidden"
              }`}
            >
              <ul className="space-y-3">
                {/* Computers */}
                <li className="relative group">
                  <Link
                    href="#"
                    className="text-white flex items-center space-x-2 hover:text-blue-400"
                  >
                    <i className="fas fa-laptop"></i>
                    <span>Computers</span>
                  </Link>
                  {/* Mega Menu */}
                  <div className="absolute left-full top-0 bg-gray-800 shadow-lg rounded-lg hidden group-hover:block w-[300px] p-4">
                    <h6 className="font-bold mb-2 text-white">Popular Items</h6>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="text-gray-400 hover:text-blue-400">
                          Laptops
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-gray-400 hover:text-blue-400">
                          Desktops
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-gray-400 hover:text-blue-400">
                          Monitors
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Mobile & Tablets */}
                <li className="relative group">
                  <Link
                    href="#"
                    className="text-white flex items-center space-x-2 hover:text-blue-400"
                  >
                    <i className="fas fa-mobile-alt"></i>
                    <span>Mobile & Tablets</span>
                  </Link>
                  <div className="absolute left-full top-0 bg-gray-800 shadow-lg rounded-lg hidden group-hover:block w-[300px] p-4">
                    <h6 className="font-bold mb-2 text-white">Top Picks</h6>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="text-gray-400 hover:text-blue-400">
                          Smartphones
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-gray-400 hover:text-blue-400">
                          Tablets
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Cameras */}
                <li>
                  <Link
                    href="#"
                    className="text-white flex items-center space-x-2 hover:text-blue-400"
                  >
                    <i className="fas fa-camera"></i>
                    <span>Cameras</span>
                  </Link>
                </li>
                {/* Headphones */}
                <li>
                  <Link
                    href="#"
                    className="text-white flex items-center space-x-2 hover:text-blue-400"
                  >
                    <i className="fas fa-headphones"></i>
                    <span>Headphones</span>
                  </Link>
                </li>
                {/* Gaming */}
                <li>
                  <Link
                    href="#"
                    className="text-white flex items-center space-x-2 hover:text-blue-400"
                  >
                    <i className="fas fa-gamepad"></i>
                    <span>Gaming</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-white hover:text-blue-400">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              Products
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              About
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
