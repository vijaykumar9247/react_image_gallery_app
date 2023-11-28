import React from 'react'

const Gallery = ({data}) => {
  return (
    <div>
        <center>
         <div className="row">
        {data.map((image) =><div key={image.id}>
        <div className="col-md-4">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
       height="200" width="250" alt={image.title}/>
        </div>
        </div>)}
        </div>
        </center>
    </div>
    
  )
  
}

export default Gallery
