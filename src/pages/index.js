import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Card from "../components/card"
import Sponsors from "../components/sponsors"
import CallToAction from "../components/cta"

import cardData from "../contents/card-data.json"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <div className="px-4 py-10 lg:px-8">
      <h1 className="text-3xl mb-2 lg:text-5xl lg:mb-8">Your Piece of History</h1>
      <h3 className="mb-8 lg:text-2xl">2,000 Genesis Edition Moments, 128 Featured Players, 6 Nations.</h3>
      <div className="flex overflow-x-auto h-full lg:justify-between">
        {cardData.cards.map((card) => (
          <Card data={card} />
        ))}
      </div>
      <div className="flex justify-around items-center mt-8 max-w-screen-sm mx-auto" >
      <svg xmlns="http://www.w3.org/2000/svg" width="27.967" height="10.217" viewBox="0 0 27.967 10.217">
  <line id="Line_4" data-name="Line 4" x2="19" transform="translate(0 4.992)" fill="none" stroke="#707070" stroke-width="1"/>
  <g id="Polygon_2" data-name="Polygon 2" transform="translate(27.772 0.228) rotate(90)" fill="#fff">
    <path d="M 9.150241851806641 8.5 L 0.8497577905654907 8.5 L 5 1.029564023017883 L 9.150241851806641 8.5 Z" stroke="none"/>
    <path d="M 5 2.059127807617188 L 1.699515342712402 8 L 8.300484657287598 8 L 5 2.059127807617188 M 5 0 L 10 9 L 0 9 L 5 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
<h5 className="underline">See more of your favourite Rugby Moments</h5>
      </div>
    </div>
    <Sponsors />
    <CallToAction />
  </Layout>
)

export default IndexPage
