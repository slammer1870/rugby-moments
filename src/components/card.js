import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Card = ({ data }) => {
  const image = getImage(data.thumbnail)

  return (
    <div className="shadow mr-4 mb-4 lg:w-2/12 transform hover:-translate-y-0.5">
      <div className="aspect-w-16 aspect-h-9 h-20 w-36 lg:h40 lg:w-auto">
        <img
          src={data.thumbnail}
          alt={data.description}
          className="object-cover"
        />
      </div>
      <div className="p-2 relative">
        <h3 className="text-sm h-11 lg:text-lg">{data.title}</h3>
        <p className="text-sm font-thin h-10">{data.description}</p>
        <h5 className="text-sm">{data.year}</h5>
      </div>
    </div>
  )
}

export default Card
