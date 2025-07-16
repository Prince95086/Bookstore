import React from 'react'

function Cards({item}) {
  
  return (
   <>
   <div className="mt-4 my-3 p-3">
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 cursor-pointer p-4">
  <figure>
    <img src={item.image}
      
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500">Buy Now</div>
    </div>
  </div>
</div>
</div>
</>
  )
}

export default Cards
