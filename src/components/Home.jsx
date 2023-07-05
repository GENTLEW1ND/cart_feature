import React from 'react'
import { toast } from 'react-hot-toast'


const img1 = "https://th.bing.com/th/id/OIP.ls1kTP6fOXVWZPYPvsms0QHaGz?pid=ImgDet&rs=1"
const img2 ="https://th.bing.com/th/id/OIP.qoWz87QHsRAtKjI_jBtXrQHaHa?pid=ImgDet&rs=1"

const Home = () => {
  const productList = [{
    name:"macbook",
    price:1200,
    imgSrc:img1,
    id:"aflfdkf",
  },
  {
    name:"Black Shoes",
    price:1200,
    imgSrc:img2,
    id:"arrtete",
  }
]

const addToCartHandler =(options)=>{
  console.log(options)
  toast.success("added to cart")
}

  return (
    <div className='home'>
      {
        productList.map((i)=>(
          <ProductCard key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
          />
        ))
      }
    </div>
  )
}

const ProductCard = ({name,id,price,handler,imgSrc})=>(
<div className="productCard">
  <img src={imgSrc} alt={name} />
  <p>{name}</p>
  <h4>${price}</h4>
  <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add to cart</button>
</div>
)

export default Home