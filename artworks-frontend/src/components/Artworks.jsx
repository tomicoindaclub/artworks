import React from 'react'
import Artwork from './Artwork'

function Artworks({data}) {
  return (
    <div>
        {data.records.map((image,i) => {
            return  <Artwork key={i} classification={image.classification}  century={image.century} culture={image.culture} department={image.department} primaryimageurl={image.primaryimageurl} technique={image.technique} title={image.title} id={image.id}/>
        })}
    </div>
  )
}

export default Artworks