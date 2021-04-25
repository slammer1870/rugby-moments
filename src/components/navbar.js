import React, { useState } from "react"

const Navbar = () => {
  const [scroll, setScroll] = useState()
  const [open, setOpen] = useState()

  const isBrowser = typeof window !== "undefined"

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const setMenu = () => {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  if (isBrowser) {
    window.addEventListener("scroll", handleScroll)
  }

  return (
    <nav
      className={`${
        scroll ? `bg-gray-600` : `bg-transparent`
      } flex w-screen justify-between items-center p-6 z-10 fixed lg:px-12`}
    >
      {/*Real logo goes here*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="16"
        viewBox="0 0 58 16"
      >
        <g id="Polygon_1" data-name="Polygon 1" fill="#fff">
          <path
            d="M 56.0587158203125 15.5 L 1.941284418106079 15.5 L 29 0.5710534453392029 L 56.0587158203125 15.5 Z"
            stroke="none"
          />
          <path
            d="M 29 1.142107009887695 L 3.882568359375 15 L 54.117431640625 15 L 29 1.142107009887695 M 29 0 L 58 16 L 0 16 L 29 0 Z"
            stroke="none"
            fill="#707070"
          />
        </g>
        <text
          id="Logo"
          transform="translate(29 11)"
          font-size="6"
          font-family="Montserrat-Medium, Montserrat"
          font-weight="500"
        >
          <tspan x="-7.641" y="0">
            Logo
          </tspan>
        </text>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="16"
        viewBox="0 0 26 16"
        onClick={setMenu}
        className="lg:hidden"
      >
        <line
          id="Line_1"
          data-name="Line 1"
          x1="26"
          transform="translate(0 0.5)"
          fill="none"
          stroke="#fff"
          stroke-width="1"
        />
        <line
          id="Line_2"
          data-name="Line 2"
          x1="26"
          transform="translate(0 15.5)"
          fill="none"
          stroke="#fff"
          stroke-width="1"
        />
        <line
          id="Line_3"
          data-name="Line 3"
          x1="26"
          transform="translate(0 7.5)"
          fill="none"
          stroke="#fff"
          stroke-width="1"
        />
      </svg>
      <div
        className={`${
          open ? "block" : "hidden"
        } w-5/12 h-screen p-5 bg-gray-400 lg:bg-transparent absolute right-0 top-0 lg:flex lg:h-full lg:w-1/3`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26.707"
          height="26.707"
          viewBox="0 0 26.707 26.707"
          className="ml-auto px-1 mr-1 lg:hidden"
          onClick={setMenu}
        >
          <line
            id="Line_8"
            data-name="Line 8"
            x1="26"
            y2="26"
            transform="translate(0.354 0.354)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
          />
          <line
            id="Line_9"
            data-name="Line 9"
            x1="26"
            y1="26"
            transform="translate(0.354 0.354)"
            fill="none"
            stroke="#fff"
            stroke-width="1"
          />
        </svg>
        <ul className="my-12 lg:flex lg:items-center lg:justify-between lg:w-full lg:my-0 lg:pr-10">
          <li className="my-4 text-white text-center lg:m-0">ABOUT</li>
          <li className="mb-4 text-white text-center lg:m-0">PRODUCTS</li>
          <li className="p-1 bg-white text-center lg:px-4">SIGN UP</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
