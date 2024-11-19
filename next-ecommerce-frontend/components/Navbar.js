"use client"
import Image from "next/image";
import menuBanner1 from "../public/images/menu_banner1.jpg";
import menuBanner6 from "../public/images/menu_banner6.jpg";
import { useState } from "react";

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
      
      setIsNavOpen((prev) => !prev);
      console.log(isNavOpen);
  };
  return (
    <header>
      <div className="bg-gray-800 text-white hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center py-2">
            {/* Left Section */}
            <div className="flex-1 md:flex-none md:w-2/3 lg:w-1/2 flex flex-col md:flex-row items-center">
              <div className="mr-4">
                <span>Free Ground Shipping Over $250</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">Download App</span>
                <ul className="flex space-x-3">
                  <li>
                    <a href="#" className="text-white hover:text-gray-400">
                      <i className="fab fa-apple"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-gray-400">
                      <i className="fab fa-android"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-gray-400">
                      <i className="fab fa-windows"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 md:w-1/3 lg:w-1/2 flex justify-center md:justify-end items-center">
              {/* Language Dropdown */}
              <div className="relative">
                <select className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500">
                  <option value="en">English</option>
                  <option value="fn">France</option>
                  <option value="us">United States</option>
                </select>
              </div>
              {/* Currency Dropdown */}
              <div className="ml-4 relative">
                <select className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBR">GBR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              className="hidden dark:block w-28"
              src="/images/logo_dark.png"
              alt="logo"
            />
            <img
              className="block dark:hidden w-28"
              src="/images/logo_light.png"
              alt="logo"
            />
          </a>

          {/* Search Bar */}
          <div className="flex-grow mx-6">
            <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
              {/* Category Dropdown */}
              <select className="bg-gray-700 text-white px-4 py-2 focus:outline-none">
                <option value="">All Category</option>
                <option value="Dresses">Dresses</option>
                <option value="Shirt-Tops">Shirt & Tops</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Pents">Pents</option>
                <option value="Jeans">Jeans</option>
              </select>
              {/* Search Input */}
              <input
                type="text"
                className="flex-grow bg-transparent text-white px-4 py-2 focus:outline-none"
                placeholder="Search Product..."
                required
              />
              {/* Search Button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"
              >
                Search
              </button>
            </form>
          </div>

          {/* Navigation Icons */}
          <ul className="flex space-x-6 items-center">
            <li>
              <a href="#" className="hover:text-gray-400">
                <i className="fas fa-user"></i>
              </a>
            </li>
            <li className="relative">
              <a href="#" className="hover:text-gray-400">
                <i className="fas fa-heart"></i>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                  0
                </span>
              </a>
            </li>
            <li className="relative">
              <a
                href="#"
                className="hover:text-gray-400 flex items-center"
                data-bs-toggle="dropdown"
              >
                <i className="fas fa-shopping-bag"></i>
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-2">
                  2
                </span>
                <span className="ml-2 hidden md:inline">$159.00</span>
              </a>
              {/* Cart Dropdown */}
              <div className="absolute bg-gray-800 right-0 mt-2 w-64 rounded-lg shadow-lg p-4 hidden group-hover:block">
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <a href="#" className="flex items-center space-x-4">
                      <img
                        className="w-12 h-12 rounded"
                        src="/images/cart_thumb1.jpg"
                        alt="cart_thumb1"
                      />
                      <span>Variable Product 001</span>
                    </a>
                    <span className="text-sm text-gray-400">1 x $78.00</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="#" className="flex items-center space-x-4">
                      <img
                        className="w-12 h-12 rounded"
                        src="/images/cart_thumb2.jpg"
                        alt="cart_thumb2"
                      />
                      <span>Ornare sed consequat</span>
                    </a>
                    <span className="text-sm text-gray-400">1 x $81.00</span>
                  </li>
                </ul>
                <div className="mt-4 border-t border-gray-700 pt-4">
                  <p className="text-gray-400 text-sm">
                    <strong>Subtotal:</strong> $159.00
                  </p>
                  <div className="flex justify-between mt-4">
                    <a
                      href="#"
                      className="bg-transparent border border-gray-700 text-white text-sm py-2 px-4 rounded hover:bg-gray-700"
                    >
                      View Cart
                    </a>
                    <a
                      href="#"
                      className="bg-blue-600 text-white text-sm py-2 px-4 rounded hover:bg-blue-700"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
                onClick={toggleNav}
                aria-expanded={isNavOpen}
              >
                <span className="mr-2">All Categories {isNavOpen ? "true" : "false"}</span>
                <i className="fas fa-bars"></i>
              </button>

              {/* Dropdown Content */}
              <div
                id="navCatContent"
                className={`absolute z-20 bg-gray-700 shadow-lg rounded mt-2 w-72 p-4 group-hover:block ${
                    isNavOpen ? "block" : "hidden"
                  }`}
              >
                <ul className="space-y-2">
                  {/* Computer */}
                  <li className="relative group">
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:text-blue-600"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fas fa-tv"></i>
                      <span>Computer</span>
                    </a>
                    {/* Mega Menu */}
                    <div className="absolute left-full top-0 bg-white shadow-lg rounded hidden group-hover:block">
                      <div className="p-4">
                        <div className="flex">
                          <div className="w-1/2">
                            <h6 className="font-bold mb-2">Featured Items</h6>
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-blue-600"
                                >
                                  Vestibulum sed
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-blue-600"
                                >
                                  Donec porttitor
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="w-1/2">
                            <h6 className="font-bold mb-2">Popular Items</h6>
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-blue-600"
                                >
                                  Curabitur laoreet
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-blue-600"
                                >
                                  Vivamus in tortor
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Image
                            src={menuBanner1}
                            alt="Computers"
                            className="rounded"
                          />
                          <h6 className="font-bold mt-2">10% Off</h6>
                          <p>Computers</p>
                          <a href="#" className="text-blue-600 hover:underline">
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Mobile & Tablet */}
                  <li className="relative group">
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:text-blue-600"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fas fa-mobile-alt"></i>
                      <span>Mobile & Tablet</span>
                    </a>
                    {/* Mega Menu */}
                    <div className="absolute left-full top-0 bg-white shadow-lg rounded hidden group-hover:block">
                      <div className="p-4">
                        <div className="flex">
                          <div className="w-1/2">
                            <h6 className="font-bold mb-2">Featured Items</h6>
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-blue-600"
                                >
                                  Vestibulum sed
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="w-1/2">
                            <h6 className="font-bold mb-2">Popular Items</h6>
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  className="block hover:text-blue-600"
                                >
                                  Curabitur laoreet
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Image
                            src={menuBanner6}
                            alt="Mobile & Tablet"
                            className="rounded"
                          />
                          <h6 className="font-bold mt-2">15% Off</h6>
                          <p>Top Laptops</p>
                          <a href="#" className="text-blue-600 hover:underline">
                            Shop now
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Other Categories */}
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:text-blue-600"
                    >
                      <i className="fas fa-camera"></i>
                      <span>Camera</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:text-blue-600"
                    >
                      <i className="fas fa-headphones"></i>
                      <span>Headphones</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center space-x-2 hover:text-blue-600"
                    >
                      <i className="fas fa-gamepad"></i>
                      <span>Gaming</span>
                    </a>
                  </li>
                </ul>
                <div className="mt-2">
                  <button className="w-full bg-gray-700 text-gray-600 py-2 rounded hover:bg-gray-600">
                    More Categories
                  </button>
                </div>

                <div class="col-span-9 md:col-span-8 sm:col-span-6">
                  <nav class="flex items-center">
                    <button
                      class="p-2 text-gray-800 bg-gray-100 rounded-lg md:hidden"
                      type="button"
                      data-collapse-toggle="navbarSidetoggle"
                    >
                      <span class="text-xl material-icons">menu</span>
                    </button>

                    <div class="ml-4">
                      <a
                        href="javascript:;"
                        class="text-gray-600 hover:text-gray-900"
                      >
                        <span class="material-icons">search</span>
                      </a>
                    </div>

                    <div
                      class="hidden w-full md:flex md:flex-grow md:ml-8"
                      id="navbarSidetoggle"
                    >
                      <ul class="flex flex-col md:flex-row md:space-x-6">
                        <li class="relative group">
                          <a
                            href="#"
                            class="block py-2 text-white hover:text-blue-600"
                          >
                            Home
                          </a>
                          <div class="absolute left-0 hidden bg-white border border-gray-200 shadow-md group-hover:block">
                            <ul class="flex flex-col p-2">
                              <li>
                                <a
                                  href="index.html"
                                  class="py-1 text-sm hover:text-blue-600"
                                >
                                  Fashion 1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="index-2.html"
                                  class="py-1 text-sm hover:text-blue-600"
                                >
                                  Fashion 2
                                </a>
                              </li>
                              <li>
                                <a
                                  href="index-3.html"
                                  class="py-1 text-sm hover:text-blue-600"
                                >
                                  Furniture 1
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="relative group">
                          <a
                            href="#"
                            class="block py-2 text-gray-800 hover:text-blue-600"
                          >
                            Pages
                          </a>
                          <div class="absolute left-0 hidden bg-white border border-gray-200 shadow-md group-hover:block">
                            <ul class="flex flex-col p-2">
                              <li>
                                <a
                                  href="about.html"
                                  class="py-1 text-sm hover:text-blue-600"
                                >
                                  About Us
                                </a>
                              </li>
                              <li>
                                <a
                                  href="contact.html"
                                  class="py-1 text-sm hover:text-blue-600"
                                >
                                  Contact Us
                                </a>
                              </li>
                              <li>
                                <a
                                  href="faq.html"
                                  class="py-1 text-sm hover:text-blue-600"
                                >
                                  FAQ
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li class="relative group">
                          <a
                            href="#"
                            class="block py-2 text-gray-800 hover:text-blue-600"
                          >
                            Products
                          </a>
                          <div class="absolute left-0 hidden bg-white border border-gray-200 shadow-md group-hover:block">
                            <ul class="flex flex-col p-2">
                              <li class="font-bold">Women's</li>
                              <li>
                                <a
                                  href="shop-list-left-sidebar.html"
                                  class="py-1 text-sm hover:text-blue-600"
                                >
                                  Vestibulum sed
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li>
                          <a
                            href="contact.html"
                            class="py-2 text-gray-800 hover:text-blue-600"
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="ml-auto">
                      <div class="flex items-center text-gray-700">
                        <span class="material-icons">phone</span>
                        <span class="ml-2">123-456-7689</span>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
