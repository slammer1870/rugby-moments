import React from "react"

const CallToAction = () => (
  <div className="py-12 px-4 max-w-screen-sm mx-auto">
    <form className="flex flex-col w-min mx-auto">
      <h1 className="text-signup lg:text-4xl w-max">Sign Up for a Launch Invite</h1>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
          className="m-4"
        />
        <label for="vehicle1" className="text-sm font-thin">
          I consent to Rugby Moments{" "}
          <a className="underline">terms of service</a>
        </label>
      </div>
      <div className="flex">
        <input
          class="w-full rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="your@mail.com"
        />
        <button class="px-8 rounded-r-lg bg-gray-400  text-white p-2 uppercase border-gray-400 border-t border-b border-r">
          OK
        </button>
      </div>
    </form>
  </div>
)

export default CallToAction
